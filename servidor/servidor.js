//Servidor con express
const express = require("express");
const app = express();

const http = require("http");
const servidor = http.createServer(app);

//Inicializamos socketio
const socketio = require("socket.io");
const io = socketio(servidor);

//Funcionalidad de socket.io en el servidor
io.on("connection", (socket) => {

  socket.on("conectado",()=>{
    console.log("usuario conectado")
  })


});

servidor.listen(4000, () => console.log("Servidor inicializado"));