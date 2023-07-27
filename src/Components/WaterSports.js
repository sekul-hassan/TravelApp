import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function WaterSports(props) {
    return (
        <Fragment>
            <Container fluid="true" className="water">
                <Row>
                    <Col>
                        <h5 className="globalSubTitle mt-2">Adventure</h5>
                        <h4 className="globalTitle mt-4 mb-3">WATER SPORTS</h4>
                        <p className="globalDescription">Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default WaterSports;