import React, { useState } from "react";
import Chat from "./componentes/Chat";
import "./App.css";
import socket from "./componentes/Socket";

function App() {
  //socket.emit("conectado","hola desde cliente")

  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);  

  const registrar = (e)=>{
    e.preventDefault();
    if(nombre !== ""){
      setRegistrado(true)
    }
  }
 
  return (
    <div className="App">
      <form onSubmit={registrar}>
        <label htmlForm="">Introduzaca su nombre</label>
        <input value={nombre} onChange={e=>setNombre(e.target.value)}/>
        <button>Ir al chat</button>
      </form>
    </div>
  );
}

export default App;
