// imports 
const app = require('express')();
const functions = require('firebase')
const server = require('http').Server(app);
const cors = require('cors');
app.use(cors());
app.use(express.json());
// listen
const port = 3000;

exports.api = 