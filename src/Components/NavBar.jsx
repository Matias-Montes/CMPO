import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/navbar.css"


export const NavBar = () => {


  const [select, setSelect] = useState("inicio")

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand 
             href="/">
            <img 
            src="https://i.ibb.co/60wHtJ1/logo.png" 
            alt="CMPO logo" 
            className='navbar-logo_img mx-2' /></Navbar.Brand>

        <Navbar.Toggle className='navbar-toggle' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll d-flex flex-column">
          <Nav
            className="me-auto w-100 my-2 my-lg-0"
          >
            <div className='navbar-link_container'>
              <Link className={`${select === "inicio"? "navbar-link_item-selected" : ""} navbar-link_item mx-2`} 
              to="/"
              onClick={() => setSelect("inicio")}
              >Inicio</Link>
              <Link className={`${select === "categories"? "navbar-link_item-selected" : ""} navbar-link_item mx-2`} 
              to="/categories"
              onClick={() => setSelect("categories")}
              >Productos</Link>
              <Link className={`${select === "aboutus"? "navbar-link_item-selected" : ""} navbar-link_item mx-2`} 
              to="/aboutus"
              onClick={() => setSelect("aboutus")}
              >Quiénes Somos</Link>
              <Link className={`${select === "contact"? "navbar-link_item-selected" : ""} navbar-link_item mx-2`} 
              to="/contact"
              onClick={() => setSelect("contact")}
              >Contácto</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
