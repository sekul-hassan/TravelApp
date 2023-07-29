import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function ProjectTop(props) {
    return (
        <Fragment>
            <Container fluid="true" className="project text-center">
                <Row>
                    <Col>
                        <div className="overlay">
                            <h4 className="aboutContent">OUR PROJECTS</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ProjectTop;