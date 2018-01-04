import * as http from 'http';
import * as WebSocket from 'ws';

/* Server port */
const port = 3746;

/* Initialize an http server */
const http_ = require('http');
const server = http_.createServer(function(request, response) {
});

/* Start our server */
server.listen(port, () => {
        console.log(`Server started at port ${server.address().port}.`);
    }
);

/* Initialize the WebSocket server instance */
const wss = new WebSocket.Server({ server });

/* On any connection */
wss.on('connection', (ws: WebSocket) => {

    /* Connection is OK then add a event */
    ws.on('message', (message: string) => {

        /* Log the received message and send it back to the client */
        console.log(`Message received from client: ${message}`);

        /* Send the message back to the client */
        ws.send(`Here is the message you have sent to the server: ${message}`);
    });

    /* Inform a feedback to the connection */   
    ws.send(`You have a connection with a WebSocket server at port ${port}.`);
});