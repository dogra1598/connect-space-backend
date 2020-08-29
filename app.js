const express = require("express");
const socketio = require("socket.io");

const app = express();

const expressServer = app.listen(5000);
const io = socketio(expressServer);

