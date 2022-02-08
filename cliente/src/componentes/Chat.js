import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import "../App.css";

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect( ()=>{
      socket.on("mensajes", (mensaje)=>{
        setMensajes([...mensajes, mensaje])
      })
    return ()=>{
      socket.off();
    }
  }, [mensajes])

  const submit = (e)=>{
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje)
  }

  return (

    <div>
      <div>
        {mensajes.map((e,i)=><div key={i}>{e.mensaje}</div>)}
      </div>
      <form onSubmit={submit}>
      <label htmlFor="">Escribe su mensaje</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button>Enviar</button>
    </form>
    </div>
   
  );
};

export default Chat;
