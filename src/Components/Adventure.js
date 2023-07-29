import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Adventure(props) {
    return (
        <Fragment>
            <Container fluid="true" className="p-5 mb-5 text-center adventure">
                <Row>
                    <Col>
                        <h4 className="globalTitle">IT'S TIME TO START YOUR ADVENTURES</h4>
                        <div className="globalAfter"> </div>
                        <p className="globalDescription">
                            Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar.
                        </p>
                    </Col>
                </Row>
                <Row className="FMargin">
                    <Col lg={6} md={6} sm={12}>
                        <div className="everest">
                            <img className="everestImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-03.jpg" alt=""/>
                        </div>
                        <div className="everestDes">
                            <h4 className="text-primary">Backpacking Trips</h4>
                            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="everest">
                            <img className="everestImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/services-2.jpg" alt=""/>
                        </div>
                        <div className="everestDes">
                            <h4>Family Hiking Trips</h4>
                            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="everest">
                            <img className="everestImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-01.jpg" alt=""/>
                        </div>
                        <div className="everestDes">
                            <h4 className="text-primary">Winter Sports</h4>
                            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="everest">
                            <img className="everestImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/services-3.jpg" alt=""/>
                        </div>
                        <div className="everestDes everestDesRes">
                            <h4>Water Sports</h4>
                            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Adventure;