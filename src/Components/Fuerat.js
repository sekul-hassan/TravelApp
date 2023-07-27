import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Fuerat(props) {
    return (
        <Fragment>
            <Container fluid="true" className="fueratImg">
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <img className="Fimg" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/quote-1.png" alt=""/>
                    </Col>
                    <Col lg={9} md={12} sm={12} className="figContent">
                        <p>"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."</p>
                        <p>- Adam Sendler</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Fuerat;