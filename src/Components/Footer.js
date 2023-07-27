import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <Fragment>
            <Container fluid="ture" className="mt-5 footer">
                <Row>
                    <Col>
                        <div>
                            <p>123 Fifth Avenue, NY 10160, New York, USA | Phone: 800-123-456 | Email: contact@example.com</p>
                            <h4><span>Copyright © 2023 Outdoor Adventure</span></h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Footer;