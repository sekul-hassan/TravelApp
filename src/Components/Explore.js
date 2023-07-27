import React, {Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

function Explore(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-5 explore">
                <div className="opacityLayer">
                    <Row>
                        <Col lg={6} md={6} sm={4}> </Col>
                        <Col lg={6} md={6} sm={8} className="exploreContent">
                            <h4>EXPLORE THE WORLD</h4>
                            <div className="af"> </div>
                            <p>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna.</p>
                            <Button className="awesomeBtn">LEARN MORE</Button>
                        </Col>

                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default Explore;