import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

function TopBar() {
  return (
    <Container fluid>
      <Row>
        <Col xs={8}>
          <div>
            <h4>Welcome back to ROUTD , Fedrick Deckow!</h4>
            <p>One line paragraph</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="border d-flex justify-content-end gap-3">
          <Button variant="primary" className="d-flex gap-2 align-items-center   px-4 radius"   >
          <FiPlus />
  New Route
            </Button>
            <Button variant="secondary">Button 2</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopBar;
