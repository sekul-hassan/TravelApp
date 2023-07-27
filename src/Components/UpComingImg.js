import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

function UpComingImg(props) {
    return (
        <Fragment>
            <Container fluid="true" className="upComingImg mt-3 text-center">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="everest">
                            <img className="everestImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/hiking-v1.jpg" alt=""/>
                        </div>
                        <div className="everestDes">
                            <h4 className="text-primary">Everest Camp Trek</h4>
                            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        </div>
                        <Button className="awesomeBtn">LEARN MORE  <FontAwesomeIcon icon={faArrowRight}/></Button>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="everest">
                            <img className="everestImg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/walking-v1.jpg" alt=""/>
                        </div>
                        <div className="everestDes">
                            <h4>Everest Camp Trek</h4>
                            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        </div>
                        <Button className="awesomeBtn">LEARN MORE  <FontAwesomeIcon icon={faArrowRight}/></Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default UpComingImg;