import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function ServiceTop(props) {
    return (
        <Fragment>
            <Container fluid="ture" className="serviceBackground">
                <Row>
                    <Col>
                        <div className="overlay">
                            <h3 className="aboutContent">SERVICE</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ServiceTop;