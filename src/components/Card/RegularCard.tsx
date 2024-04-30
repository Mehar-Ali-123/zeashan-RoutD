import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import IconSprite from '../../assets/icon.svg';
import { LINE_IMAGES } from '../../assets/images/line/line';
import "./_cardui.scss";
import VanIcon from '../../assets/VanIcon';

interface CardData {
    id: number;
    icon: React.ReactNode; // Changed from string to React.ReactNode
    bgColor: string;
    arrow: "up" | "down";
    number: string;
    subTitle: string;
}

const RegularCard: React.FC = () => {
    const cardData: CardData[] = [
        { id: 1, icon: <VanIcon/>, bgColor: "#44BD32", arrow: "up", number: '4.99k', subTitle: 'Number of Complete Orders' },
        { id: 2, icon: <VanIcon/>, bgColor: "#283990", arrow: "down", number: '89.19k', subTitle: 'Average Number of Order Per Route' },
        { id: 3, icon: <VanIcon/>, bgColor: "#E84118", arrow: "up", number: '89.19k', subTitle: 'Number of Customer' },
        { id: 4, icon: <VanIcon/>, bgColor: "#0A838A", arrow: "up", number: '89.19k', subTitle: 'Number of Customer' },
    ];

    const getArrowColorStyle = (arrow: "up" | "down"): React.CSSProperties => {
        return arrow === 'up' ? { color: '#44BD32' } : { color: '#E84118' };
    };

    return (
        <Container fluid>
            <Row className='d-flex justify-content-between'>
                {cardData.map((card) => (
                    <Col key={card.id} xs={12} md={6} lg={3}>
                        <div className="bg-white radius p-3 data-card my-3">
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='card-sub-title mb-0 w-75'>{card.subTitle}</p>
                                <div className='card-icon-box' style={{ backgroundColor: card.bgColor }}>
                                   {card.icon}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-2'>
                                <div>
                                    <p className='card-numbers mb-0 mt-2'>{card.number}</p>
                                    <div className='progress-content d-flex'>
                                        <span className="mx-1 progress" style={getArrowColorStyle(card.arrow)}>
                                            <i className={`bi bi-arrow-${card.arrow}-short arrow-icon`}></i>
                                            50%
                                        </span>
                                        <span>vs last week</span>
                                    </div>
                                </div>
                                <div className='graph-line-img'>
                                    <img src={card.arrow === 'up' ? LINE_IMAGES.UPLINE : LINE_IMAGES.DOWNLINE} alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RegularCard;
