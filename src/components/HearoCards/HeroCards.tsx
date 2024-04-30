import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

function HeroCards() {
  return (
    <Container fluid>
    <Row>
      <Col xs={8} className="border bg-white radius p-5">
        <div>
 cards 
        </div> 
      </Col>
      <Col xs={4}>
        <div className="border bg-primary radius p-5">
         sigle card
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default HeroCards