# URL Shortener Microservice

* Pass a URL as a parameter and I will receive a shortened URL in the JSON response.

* If the URL is an invalid URL that doesn't follow the valid <http://www.example.com> format, the JSON response will contain an error instead.

* When I visit that shortened URL, it will redirect me to my original link.

## How it works

1. Just clone the repository, install dependencies and open localhost:3000 on the browser.
1. Pass the URL that should be shortened as query parameter: <localhost:3000/new/http://www.example.com>