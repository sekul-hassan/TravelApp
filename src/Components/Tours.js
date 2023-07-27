import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

function Tours(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-5">
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <div className="tourContent">
                            <h3>UPCOMING TOURS & DESTINATION</h3>
                            <div className="globalAfter"> </div>
                            <p>
                                Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.
                            </p>
                            <Button className="awesomeBtn">LEARN MORE</Button>
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <img className="tourImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-01.jpg" alt=""/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <img className="tourImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/image-1.jpg" alt=""/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <img className="tourImgD1" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/image-1.jpg" alt=""/>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <img className="tourImgD2" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-04.jpg" alt=""/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Tours;