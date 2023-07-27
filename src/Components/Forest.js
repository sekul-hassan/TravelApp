import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Forest(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-3 forest water">
                <Row>
                    <Col>
                        <h5 className="globalSubTitle mt-2">Forest Tour</h5>
                        <h4 className="globalTitle mt-4 mb-3">CAMPING</h4>
                        <p className="globalDescription">Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Forest;