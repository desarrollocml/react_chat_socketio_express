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
  /* socket.on("conectado",()=>{
    console.log("usuario conectado")
  }) */
 let nombre;
  socket.on("mensaje", (nombre, mensaje) => {
    io.emit("mensajes", { nombre, mensaje });
  });

  socket.on("disconnect", () => {
    io.emit("mensajes", {
      servidor: "Servidor",
      mensaje: `${nombre} ha abandono la sala de chat`,
    });
  });
});

servidor.listen(4000, () => console.log("Servidor inicializado"));
