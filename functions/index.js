// imports 
const express = require('express');
const app = express()
const functions = require('firebase-functions')
const server = require('http').Server(app);
const cors = require('cors');
app.use(cors());
app.use(express.json());
// listen
app.get('/', (req, res)=>{
    return res.status(200).json("success");
})
exports.api = functions.https.onRequest(app);