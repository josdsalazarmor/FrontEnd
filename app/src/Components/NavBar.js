import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Figure} from "react-bootstrap";
import './All.css';
export default class NavBar extends Component {
    render(){
        return (
            <Navbar collapseOnSelect bs expand="lg" bg={"info"} variant={"light"}>
                <Navbar.Brand href="#home">
                        <Figure.Image
                            width={180}
                            height={80}
                            src="https://cdn1.imggmi.com/uploads/2019/5/15/04950a0565f06f61552da1b58a3f7f47-full.png"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#login">Iniciar Sesión</Nav.Link>
                        <Nav.Link href="#register">Registrarse</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Mi cuenta" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#summary">Resumen</NavDropdown.Item>
                            <NavDropdown.Item href="#profile">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#purchases">Mis compras</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logoff">Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="#catalog">
                            Nuestros productos
                        </Nav.Link>
                        <Nav.Link href="#cart">
                            <Figure.Image
                                width={35}
                                height={35}
                                src="https://cdn1.imggmi.com/uploads/2019/5/15/fb7b9294e120d553458409c89aa3442d-full.png"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}