import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function ContactTop() {
    return (
        <Fragment>
            <Container fluid="true" className="contact">
                <Row>
                    <Col>
                        <div className="overlay">
                            <div className="contactContent">
                                <h4>CONTACT US</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ContactTop;