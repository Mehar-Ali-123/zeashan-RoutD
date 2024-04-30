import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import IconSprite from '../../assets/icon.svg';
import VanIcon from '../../assets/VanIcon';
import "./_cardui.scss";

interface CardData {
    id: number;
    bgColor: string;
    number: string;
    subTitle: string;
}

const Card: React.FC = () => {
    const cardData: CardData[] = [
        { id: 1, bgColor: "#0A838A", number: '4.99k', subTitle: 'Number of Contract' },
        { id: 2, bgColor: "#283990", number: '89.19k', subTitle: 'Number of Customer' },
        { id: 3, bgColor: "#9C88FF", number: '89.19k', subTitle: 'Number of Active Drivers' },
        { id: 4, bgColor: "#44BD32", number: '89.19k', subTitle: 'Number of Completed Orders' },
        { id: 5, bgColor: "#E84118", number: '89.19k', subTitle: 'Number of Failed Deliveries' },
        { id: 6, bgColor: "#00A8FF", number: '89.19k', subTitle: 'Number of Recuring Routes' },
    ];

    return (
        <Container fluid>
            <Row className='d-flex justify-content-between'>
                {cardData.map((card) => (
                    <Col key={card.id} xs={12} md={6} lg={4}>
                        <div className='bg-white radius p-2 py-3 data-card my-2 '>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='card-icon-box' style={{ backgroundColor: card.bgColor }}>
                                    <VanIcon className='card-icon' /> {/* Replaced the SVG with VanIcon */}
                                </div>
                                <p className='card-numbers mb-0'>{card.number}</p>
                            </div>
                            <div>
                                <p className='card-sub-title mb-0 mt-3'>{card.subTitle}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Card;
