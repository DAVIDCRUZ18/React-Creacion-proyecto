import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export const Primercomponente = () => {
  const [Productos, setProductos] = useState([])
  function Llamar_api() {
    axios({
      url:'http://127.0.0.1:4200/Producto/',method:'get'
    }).then(respuesta => {
      console.log(respuesta.data);
      setProductos(respuesta.data)
    })
  }
  return (
    <div>
      <h1>boton</h1>
      <p>intento #2</p>
      <button onClick={Llamar_api}>utilizacion de api</button>

      <div>
        {
          Productos.length !==0 && 
          Productos[0].nombre
        }
      </div>
    </div>
  )
}