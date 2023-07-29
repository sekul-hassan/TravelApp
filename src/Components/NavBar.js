import React, {Fragment} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { useMediaQuery } from '@react-hook/media-query';
import {Link} from "react-router-dom";

function NavBar() {

    const isLargeScreen = useMediaQuery('(min-width: 992px)');
    const dark = 'resMenu';
    const image = [
        'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/logo@2x.png',
        'https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/white-logo@2x.png'
    ];
    const logos = isLargeScreen ? image[1]:image[0];
    return (
        <Fragment>
            <Container fluid="true">
            <Navbar collapseOnSelect expand="lg" className={`menu ${!isLargeScreen && dark}`}>
                    <Navbar.Brand href="#home"><Link to="/"><img style={{ width: '150px',height: 'auto'}} className="logo" src={logos} alt=""/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav className="nav">
                            <Link className="text-decoration-none" to="/"><Nav.Link className="navLink" href="#deets">Home</Nav.Link></Link>
                            <Link className="text-decoration-none" to="/about"><Nav.Link className="navLink" href="#memes">About</Nav.Link></Link>
                            <Link className="text-decoration-none" to="/service"> <Nav.Link className="navLink" href="#memes">Service</Nav.Link></Link>
                            <Link className="text-decoration-none" to="/project"> <Nav.Link className="navLink" href="#memes">Projects</Nav.Link></Link>
                            <Link className="text-decoration-none" to="/contact"><Nav.Link className="navLink" href="#memes">Contact</Nav.Link></Link>
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