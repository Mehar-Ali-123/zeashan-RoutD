import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import "./__accordion.scss"
function BasicExample() {

  return (
    <Container fluid className='p-0'>
      <Accordion className='mb-3'>
        <Accordion.Item eventKey="0" className='accordion-bar'>
          <Row>
            <Accordion.Header className='w-100'>
              <Col xs={5}>
                <h4 className='mb-1 accordion-title'> Delivery vs Collection</h4>
                <p className='mb-0 accordion-subtitle'>Total Orders:<span className='order-value'>3.4k</span></p>
              </Col>
              <Col xs={5}>
                <h4 className='mb-1 accordion-title'>Daily Order Completion</h4>
                <p className='mb-0 accordion-subtitle'>Total Orders:<span className='order-value'>250</span></p>
              </Col>
            </Accordion.Header>
          </Row>
          <Accordion.Body>
            <Row>
              <Col xs={5}>
                <Row>
                  <Col xs={5} className='d-flex flex-column'>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                      <div className='d-flex align-items-center'>
                        <span className='color-indicator'></span>
                        <span className='indicator-next-title'>Delivery</span>
                      </div>
                      <p className='mb-0 order-qunatity'>74 Orders</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                      <div className='d-flex align-items-center'>
                        <span className='color-indicator'></span>
                        <span className='indicator-next-title'>Collection</span>
                      </div>
                      <p className='mb-0 order-qunatity'>56 Orders</p>
                    </div>
                  </Col>
                  <Col xs={7}>
                    
                  </Col>
                </Row>
              </Col>
              <Col xs={5}>
                Accordion Item #1
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container >
  );
}

export default BasicExample;