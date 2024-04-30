import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../Card/Card"
import "./__herocard.scss"

function HeroCards() {
  return (
    <Container fluid className='mt-2'>
      <Row>
        <Col xs={8} className="border bg-white radius py-2">
          <h5 className='mt-3 mx-3 fs-5'>Life Time Data</h5>
          <Cards />
        </Col>
        <Col xs={4}>
          <div className="border radius p-3 h-100 d-flex flex-column justify-content-between hero-sidecard">
            <div className='yellow-circle'></div>
            <div className='bottom-circle'></div>
            <div className='border-circle-1'></div>
            <div className='border-circle-2'></div>
            <div className='hero-sidecard-overlay'>
              <div className='d-flex justify-content-between align-items-center'>
                <h5 className='mb-0'>Current Subscription</h5>
                <Button className="d-flex gap-2 align-items-center px-4 radius btn-1">
                  Basic
                </Button>
              </div>
              <h3 className='mb-0 mt-3'>$ 300 <span>/month</span></h3>
              <p className='mb-0 mt-2'>Want to get more features</p>
              <div>
                <Button className="d-flex gap-2 align-items-center px-4 py-2 mt-3 radius btn-2">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroCards