import React from 'react'
import Accordions from '../Accordion/Accordions'
import { Col, Container, Row } from 'react-bootstrap'

const OrderDetails = () => {
    return (
        <Container fluid className='mt-3 p-0'>
            <Row>
                <Col>
                    <Accordions />
                </Col>
            </Row>
        </Container>
    )
}

export default OrderDetails