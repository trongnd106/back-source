require('dotenv').config()
const express = require('express');  //commonjs
// const path = require('path');
const configViewEngine = require('./config/viewEngine');
const initWebRoute = require('./routes/web');   //const webRoutes = require('./routes/web');
const initAPIRoute = require('./routes/api');
const mysql = require('mysql2');  // get the client

const app = express();       // app express
const port = process.env.PORT || 8888;        // port
const hostname = process.env.HOST_NAME;

// console.log(">>> env: ",process.env)

// config req.body
app.use(express.json())        // convert to json
app.use(express.urlencoded({ extended: true }))    // for form data

// config template engine
configViewEngine(app)

// int web route
    // app.use('/', webRoutes)
initWebRoute(app)

// int web route
initAPIRoute(app)

// test connection
// (moved)

//query (controller)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})



















/*
const http = require('http');     // node.js
const hostname = '127.0.0.1';     // localhost
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/