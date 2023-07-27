import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function UpComing(props) {
    return (
        <Fragment>
            <Container fluid="true" className="upComing">
                <Row>
                    <Col>
                        <h3>UPCOMING EVENTS</h3>
                        <div className="after"> </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default UpComing;