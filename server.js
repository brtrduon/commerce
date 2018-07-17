const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const route = require('./route');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/commerce');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

route(app);

const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);