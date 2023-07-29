import React, {Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function ContactForm() {
    return (
        <Fragment>
            <Container fluid="true" className="formContainer">
                <Row>
                    <Col sm={12} lg={6} md={6}>
                        <h4 className="globalTitle">WE'RE READY, LET'S TALK.</h4>
                        <Form>
                            <Form.Group>
                                <Form.Control className="controlForm" type="text" placeholder="Your Name" /><br/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="controlForm" type="email" placeholder="Email Address"/><br/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="textArea" as="textarea" type="text" placeholder="Message" rows={3.5}/><br/>
                            </Form.Group>
                            <Button className="awesomeBtn">SEND MESSAGE</Button>
                        </Form>
                    </Col>
                    <Col sm={12} lg={6} md={6}>
                        <h3 className="globalTitle">CONTACT INFO</h3>
                        <h3 className="globalSubTitle">Address</h3>
                        <h3 className="globalDescription">123 Fifth Avenue, NY 10160, New York, USA</h3>
                        <h3 className="globalSubTitle">Email Us</h3>
                        <h3 className="globalDescription">contact@gmail.com</h3>
                        <h3 className="globalSubTitle">Coll Us</h3>
                        <h3 className="globalDescription">8000-8989-8787</h3>
                        <h3 className="globalSubTitle">Follow Us</h3>
                        <div className="iconDiv">
                            <a href={"www.facebook.com/sekul.hassan"}><FontAwesomeIcon className="fontAwesome facebook-icon" icon={faFacebookF} /></a>
                            <a href={"twitter.com"}><FontAwesomeIcon className="fontAwesome twitter-icon" icon={faTwitter} /></a>
                            <a href={"youtube.com"}><FontAwesomeIcon className="fontAwesome youtube-icon" icon={faYoutube} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ContactForm;
