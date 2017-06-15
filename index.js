/**
 * Created by Bien on 2017-06-15.
 */
// Main starting point

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup ( express middleware )
app.use(morgan('combined'));  // logs incoming requests in server console
app.use(bodyParser.json({ type: '*/*'})); // parses incoming requests into json objects no matter what the type is
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); //create an http server and server requests
server.listen(port);
console.log('Server listening on port: ', port);


