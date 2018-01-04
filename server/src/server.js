"use strict";
const WebSocket = require("ws");
const port = 3746;
const http_ = require('http');
const server = http_.createServer(function (request, response) {
});
server.listen(port, () => {
    console.log(`Server started at port ${server.address().port}`);
});
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Message received from client: ${message}`);
        ws.send(`Here is the message you have sent to the server: ${message}`);
    });
    ws.send(`You have a connection with a WebSocket server at port ${port}.`);
});
