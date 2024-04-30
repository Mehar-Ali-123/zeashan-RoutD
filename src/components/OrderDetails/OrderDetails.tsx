import React from "react";
import Accordions from "../Accordion/Accordions";
import { Col, Container, Row } from "react-bootstrap";
import "../Accordion/__accordion.scss"
const OrderDetails = () => {
  return (
    <Container fluid className="mt-3 p-0">
      <Row>
        <Col xs={12}>
          <Accordions
            headingPrimary="Delivery vs Collection vs Depot"
            headingSecondary="Daily Order Completion"
            subtitlePrimary={
              <p className="mb-0 accordion-subtitle">
                Total Orders:
                <span className="order-value">3.4k</span>
              </p>
            }
            subtitleSecondary={
              <p className="mb-0 accordion-subtitle">
                Total Orders:
                <span className="order-value text-small">250</span>
              </p>
            }
          />
        </Col>
        <Col xs={12}>
          <Accordions
            headingPrimary="Failed Delivery Reasons"
            headingSecondary=""
            subtitlePrimary={
              <p className="mb-0 accordion-subtitle">
                Total Failed Deliveries:
                <span className="order-value">3700</span>
              </p>
            }
            subtitleSecondary={
              <p className="mb-0 accordion-subtitle"></p>
            }
          />
        </Col>
        <Col xs={12}>
          <Accordions
            headingPrimary="Recuring ROute Frequency Count"
            headingSecondary="Orders With Missing Items"
            subtitlePrimary={
              <p className="mb-0 accordion-subtitle">
                Total Routs:
                <span className="order-value">170</span>
              </p>
            }
            subtitleSecondary={
              <p className="mb-0 accordion-subtitle">
                Total Deliveries:
                <span className="order-value">3700</span>
              </p>
            }
          />
        </Col>
        <Col xs={12}>
          <Accordions
            headingPrimary="Top 5 Customers With Missing Items"
            headingSecondary=""
            subtitlePrimary={
              <p className="mb-0 accordion-subtitle">
                Total Missing Items:
                <span className="order-value">3700</span>
              </p>
            }
            subtitleSecondary={
              <p className="mb-0 accordion-subtitle"></p>
            }
          />
        </Col>
        <Col xs={12}>
          <Accordions
            headingPrimary="Total 5 Reasons For Latness"
            headingSecondary=""
            subtitlePrimary={
              <p className="mb-0 accordion-subtitle">
                Total Drivers & Vehicles:
                <span className="order-value">3700</span>
              </p>
            }
            subtitleSecondary={
              <p className="mb-0 accordion-subtitle"></p>
            }
          />
        </Col>
        <Col xs={12}>
          <Accordions
            headingPrimary="Vehicle Registration With Major & Minor Counts"
            headingSecondary="Count Of Deliveries By Hour"
            subtitlePrimary={
              <p className="mb-0 accordion-subtitle">
                Total Driver & Vehicles:
                <span className="order-value">170</span>
              </p>
            }
            subtitleSecondary={
              <p className="mb-0 accordion-subtitle">
                Total Deliveries:
                <span className="order-value">3700</span>
              </p>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;
