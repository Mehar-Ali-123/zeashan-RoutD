import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import IconSprite from '../../assets/icon.svg';
import "./_cardui.scss"
function Card() {
    const cardData = [
        { id: 1, iconId: 'icon1', number: '4.99k', subTitle: 'Number of Contract' },
        { id: 2, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
        { id: 3, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
        { id: 4, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
        { id: 5, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
        { id: 6, iconId: 'icon2', number: '89.19k', subTitle: 'Number of Customer' },
    ];
    return (
        <Container fluid>
            <Row className='d-flex justify-content-between'>
                {cardData.map((card) => (
                    <Col key={card.id} xs={4}>
                        <div className='className="bg-white radius p-3 data-card my-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='card-icon-box'>
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
    )
}

export default Card