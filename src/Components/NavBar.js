import React, {Fragment} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { useMediaQuery } from '@react-hook/media-query';

function NavBar(props) {

    const isLargeScreen = useMediaQuery('(min-width: 992px)');

    return (
        <Fragment>
            <Container fluid="true">
            <Navbar collapseOnSelect expand="lg" className="menu ">

                    <Navbar.Brand href="#home"><img className="logo" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/white-logo@2x.png" alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="nav">
                            <Nav.Link className="navLink" href="#deets">Home</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">About</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Service</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Projects</Nav.Link>
                            <Nav.Link className="navLink" href="#memes">Contact</Nav.Link>
                            {
                                isLargeScreen &&  <Button className="navAction">TAKE ACTION</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>

            </Navbar>
            </Container>
        </Fragment>
    );
}

export default NavBar;