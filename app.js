const express = require("express");
const socketio = require("socket.io");

const namespaces = require("./data/namespaces");

const app = express();

const expressServer = app.listen(5000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  nsdata = namespaces.map((ns) => {
    return {
      img: ns.img,
      endpoint: ns.endpoint,
    };
  });
  socket.emit("nsList", nsdata);
});

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on("connection", (nsSocket) => {
    console.log(`${nsSocket.id}`);
    nsSocket.emit("nsRoomLoad", namespaces[0].rooms);
  });
});