import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import IconSprite from "../../assets/icon.svg";
import VanIcon from '../../assets/VanIcon'
import "./_cardui.scss";
function Card() {
  const cardData = [
    { id: 1, icon: <VanIcon/>, number: "4.99k", subTitle: "Number of Contract" },
    {
      id: 2,
      icon: <VanIcon/>,
      number: "89.19k",
      subTitle: "Number of Customer",
    },
    {
      id: 3,
      icon: <VanIcon/>,
      number: "89.19k",
      subTitle: "Number of Customer",
    },
    {
      id: 4,
      icon: <VanIcon/>,
      number: "89.19k",
      subTitle: "Number of Customer",
    },
    {
      id: 5,
      icon: <VanIcon/>,
      number: "89.19k",
      subTitle: "Number of Customer",
    },
    {
      id: 6,
      icon: <VanIcon/>,
      number: "89.19k",
      subTitle: "Number of Customer",
    },
  ];
  return (
    <Container fluid className="p-0">
      <Row className="d-flex justify-content-between">
        {cardData.map((card) => (
          <Col key={card.id} xs={4}>
            <div className='bg-white radius p-3 data-card my-2 '>
              <div className="d-flex align-items-center justify-content-between ">
                <div className="card-icon-box ">
               {card.icon}
                </div>
                <p className="card-numbers mb-0">{card.number}</p>
              </div>
              <div>
                <p className="card-sub-title mb-0 mt-3">{card.subTitle}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Card;
