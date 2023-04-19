import React from 'react'
import { Carousel } from 'react-bootstrap'

function Sldier() {
  return (
    <div>
         <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61aURrton0L._SX3000_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51Ny9qLL4BL._SX3000_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71fPNxKK-SL._SX3000_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Sldier