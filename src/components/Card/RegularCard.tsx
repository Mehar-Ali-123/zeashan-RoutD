import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import IconSprite from '../../assets/icon.svg';
import "./_cardui.scss"
function RegularCard() {
    const cardData = [
        { id: 1, iconId: 'icon1', number: '4.99k', subTitle: 'Number of Complete Orders' },
        { id: 2, iconId: 'icon2', number: '89.19k', subTitle: 'Average Number of Order Per Route' },
        { id: 3, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
        { id: 4, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
    ];
    return (
        <Container fluid>
            <Row className='d-flex justify-content-between'>
                {cardData.map((card) => (
                    <Col key={card.id} xs={3}>
                        <div className='className="bg-white radius p-3 data-card my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='card-sub-title mb-0 w-75'>{card.subTitle}</p>
                                <div className='card-icon-box'>
                                    <svg className='card-icon'>
                                        <use xlinkHref={`${IconSprite}#${card.iconId}`} />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className='card-numbers mb-0 mt-2'>{card.number}</p>
                                    <div>
                                        <span className='mx-1'>
                                            <i className="bi bi-arrow-up-short arrow-icon"></i>
                                            50%
                                        </span>
                                        <span>vs last week</span>
                                    </div>
                                </div>
                                <div className='graph-line-img'>

                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default RegularCard