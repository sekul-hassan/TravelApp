import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function WinterSports(props) {
    return (
        <Fragment>
            <Container fluid="true" className="winter">
                <Row>
                    <Col>
                        <h5 className="globalSubTitle mt-2">Snow Adventure</h5>
                        <h4 className="globalTitle mt-4 mb-3">WINTER SPORTS</h4>
                        <p className="globalDescription">Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default WinterSports;