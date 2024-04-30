import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from '../Card/RegularCard';
function RegularCard() {
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col xs={12} className="border bg-white radius py-2">
                    <h5 className='mt-1 mx-3'>Data at Regular intervals</h5>
                    <Card />
                </Col>
            </Row>
        </Container>
    )
}

export default RegularCard