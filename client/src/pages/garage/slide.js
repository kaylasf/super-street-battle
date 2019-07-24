import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Cards from './cards.js'
import Upgrades from './upgrades'
import images from '../../baseCars.json'
import Axios from 'axios'

export default function Slide() {

    //set state for Upg/Workshop to be hidden,
    const [showWorkshop, setShowWorkshop] = useState(false)
    const [currentCar, setCurrentCar] = useState(images[0])
    const handleSelect = () => {
        setShowWorkshop(false)
    }

    const handleShowWorkShop = (car) => {
        setCurrentCar(car)
        setShowWorkshop(true)
    }

    // state of current car, pass id to onclick then pass to component the current id or info,
    return (
        <div>

            <Container className='text-center'>
                <Row>
                    <Col xs={12} className='text-center pt-5' style={{ fontSize: '37px' }}>
                        <h1>
                            Garage
                        </h1>
                    </Col>
                </Row>

                <Carousel interval={false} onSelect={handleSelect}>
                    {images.map(car => (

                        <Carousel.Item key={car.id} id={car.id} onClick={() => handleShowWorkShop(car)}>
                            <img className="d-block w-100"
                                src={car.image}
                                alt={car.id}
                                thumbnail />

                            <Carousel.Caption>

                                <small>Model of Car</small>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>

            </Container>

            {/* create onclick function which will pass id of car to upgrades which will then open up the workshop */}
               { showWorkshop ? <Upgrades car={currentCar} /> :  null}
        </div>
    )
}