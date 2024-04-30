import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../Card/Card"

function HeroCards() {
  return (
    <Container fluid className='mt-2'>
      <Row>
        <Col xs={8} className="border bg-white radius py-2">
          <h5 className='mt-1 mx-3'>Life Time Data</h5>
          <Cards />
        </Col>
        <Col xs={4}>
          <div className="border bg-primary radius p-3">
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='mb-0'>Current Subscription</h5>
              <Button variant="success" className="d-flex gap-2 align-items-center   px-4 radius">
                Basic
              </Button>
            </div>
            <div>
              <h3 className='mb-0 mt-3'>$ 300 <span>/month</span></h3>
              <p className='mb-0 mt-2'>Want to get more features</p>
              <Button variant="success" className="d-flex gap-2 align-items-center px-4 py-2 mt-3 radius">
                Learn more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroCards