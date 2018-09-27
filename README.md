# Restaurant Review App
---

## Project Overview

Overall aim of the project is to convert a statuc webpage to a mobile-friendly web application. Another important task is to add service worker for offline user experience.

## Dependencies

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.


### How to use

You can visit https://kedarbh.github.io/mws-restaurant-stage-1/ to view the functionality of this web app.

Alternatively,


Fork and clone this repository to your local machine. This project has some node modules used so run ```npm install``` to install all the dependencies. Then run ```npm run dev``` to start a server. You might need to change the server port in js/dbhelper.js file.

If you have python installed, which can be checked using ```python -V```, the you can use simple HTTP server using python.

If your python version is 2 run server using command ```python -m SimpleHTTPServer 8000``` and if the version is 3 then use ```python3 -m http.server 8000```. After starting the server go to localhost:8000 to start the app.




1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.


### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.



