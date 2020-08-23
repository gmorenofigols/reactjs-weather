import sys
import signal
import requests
import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

myApiKey = '&appid=439d4b804bc8187953eb36d2a8c26a02'

def main(argv):
    signal.signal(signal.SIGINT, kill)

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("serving at port", PORT)
        httpd.serve_forever()

    response = get_weather('London')

    if response.status_code != 200:
        raise ApiError('GET .../weather/')

    data = response.json()
    print(data)

def get_weather(city):
    return requests.get(url('weather?q=' + city))

# API documentation
# api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
def url(path):
    return 'https://samples.openweathermap.org/data/2.5/' + path + myApiKey

def kill(signal, frame):
    print ('Server terminated')
    sys.exit(0)

if __name__ == "__main__":
    main(sys.argv)
