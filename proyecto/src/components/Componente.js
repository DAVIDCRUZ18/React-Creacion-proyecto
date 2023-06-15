import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Componente = () => {
    const [Productos, setProductos] = useState([])
    function Llamar_api() {
        axios({
            url: 'http://127.0.0.1:4200/Producto/', method: 'get'
        }).then(respuesta => {
            console.log(respuesta.data);
            setProductos(respuesta.data)
        })
    }
  return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                              Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                              Separated link
                          </NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
          </Navbar>
          <div>
              {Productos.length !== 0 && Productos[0].nombre}
              <button onClick={Llamar_api}>Activar API</button>
          </div>
      </div>
  )
}
