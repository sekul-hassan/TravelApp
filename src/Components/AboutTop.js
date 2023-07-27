import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function AboutTop(props) {
    return (
        <Fragment>
            <Container fluid="ture" className="AboutBackground">
                <Row>
                    <Col>
                        <div className="overlay">
                            <h3 className="aboutContent">WHO WE ARE?</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AboutTop;