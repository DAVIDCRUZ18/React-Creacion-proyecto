import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import 'node_modules/bootstrap/dist/css/bootstrap.css';
import 'node_modules/bootstrap/dist/js/bootstrap.js';

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
      <header class="sticky-top">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
          <div class="container-fluid">
            {/* #Botón de menú para dispositivos móviles*/}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* Enlaces de navegación*/}
            <div class="collapse navbar-collapse justify-content-center text-uppercase" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="Index.html">
                    <i class="bi bi-house"></i> HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="PRODUCTOS.html">
                    <i class="bi bi-basket"></i> PRODUCTOS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="Contacto.html">
                    <i class="bi bi-clipboard2-fill"></i> registro
                    <button onClick={Llamar_api}>utilizacion de api</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div>
          {
            Productos.length !== 0 &&
            Productos[0].nombre
          }
        </div>
      </header>
    </div>
  )
}