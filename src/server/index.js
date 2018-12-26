'use strict';

const os = require('os');

const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const server = express();

server.use(express.static('dist'));

server.use(cors);
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send({ username: os.userInfo().username });
});

server.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

server.listen(3000, () => console.log('Listening on port 8080'));