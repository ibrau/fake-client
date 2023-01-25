# fake-client

## Pre-reqs

install npm and node js
## Installation 
    npm install express -> installs Express for routing from Node 

    npm install -g nodemon -> installs optional package which is a server package

    npm install body-parser -> helps parse incoming request bodies in middleware before handlers under req.body 
        app.use(bodyParser.urlencoded({ extended: true })) in js file 
## Running Locally 

open terminal and navigate to this project

    nodemon -> starts express server on directory

copy port it prints in commandline and open localhost:{port number} in browser