import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Mission(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-1 p-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h3 className="globalTitle">OUR MISSION</h3>
                        <div className="globalAfter"> </div>
                        <p className="globalDescription">Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.</p>
                        <p className="globalDescription">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="imgBack">
                            <img src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-02.jpg" alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Mission;