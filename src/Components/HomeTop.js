import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

function HomeTop(props) {
    return (
        <Fragment>
            <Container fluid="true">
                <Row>
                    <Col>
                        <div className="background">
                            <div className="overlay">
                                <div className="content">
                                    <h3 className="subTitle">Explore the Colourful World</h3>
                                    <div className="after"> </div>
                                    <h1 className="title">A WONDERFUL GIFT</h1>
                                    <Button className="homeTopButton">LEARN MORE</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default HomeTop;