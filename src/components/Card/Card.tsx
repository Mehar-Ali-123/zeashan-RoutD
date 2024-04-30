import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import IconSprite from '../../assets/icon.svg';
import "./_cardui.scss";

interface CardData {
    id: number;
    iconId: string;
    bgColor: string;
    number: string;
    subTitle: string;
}

const Card: React.FC = () => {
    const cardData: CardData[] = [
        { id: 1, iconId: 'icon1', bgColor: "#0A838A", number: '4.99k', subTitle: 'Number of Contract' },
        { id: 2, iconId: 'icon2', bgColor: "#283990", number: '89.19k', subTitle: 'Number of Customer' },
        { id: 3, iconId: 'icon2', bgColor: "#9C88FF", number: '89.19k', subTitle: 'Number of Customer' },
        { id: 4, iconId: 'icon2', bgColor: "#44BD32", number: '89.19k', subTitle: 'Number of Customer' },
        { id: 5, iconId: 'icon2', bgColor: "#E84118", number: '89.19k', subTitle: 'Number of Customer' },
        { id: 6, iconId: 'icon2', bgColor: "#00A8FF", number: '89.19k', subTitle: 'Number of Customer' },
    ];

    return (
        <Container fluid>
            <Row className='d-flex justify-content-between'>
                {cardData.map((card) => (
                    <Col key={card.id} xs={4}>
                        <div className='bg-white radius p-3 data-card my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='card-icon-box' style={{ backgroundColor: card.bgColor }}>
                                    <svg className='card-icon'>
                                        <use xlinkHref={`${IconSprite}#${card.iconId}`} />
                                    </svg>
                                </div>
                                <p className='card-numbers mb-0'>{card.number}</p>
                            </div>
                            <div>
                                <p className='card-sub-title mb-0 mt-4'>{card.subTitle}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Card;
