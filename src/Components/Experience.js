import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Experience(props) {
    return (
        <Fragment>
            <Container fluid="true" className="p-5 experience">
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <h3 className="globalSubTitle">Extraordinary Experiences</h3>
                        <div className="globalAfter"> </div>
                        <p className="globalDescription">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="globalDescription">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <h4 className="globalSubTitle">Our Core Values</h4>
                        <div className="globalAfter"> </div>
                        <p className="globalDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div>
                            <h4 className="coreLine">Locavit liberioris possedit</h4>
                            <h4 className="coreLine">Diremit mundi mare undae</h4>
                            <h4 className="coreLine">Diremit mundi mare undae</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Experience;