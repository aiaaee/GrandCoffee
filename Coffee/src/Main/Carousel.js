import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
export default function WebCarousel() {
  return (
    <div style={{ display: 'block', width: '100%' , height:'100%'  }} >
      <Carousel>
        <Carousel.Item interval={2500}>
          <img style={{height:"750px"}}
            className="d-block w-100 Carousel_image"
            src='Images/img-9.png'
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 className='w-100 Carousel-h3'>A place for coffee,fun!</h3>
            <p>Live well, live happy and
            Life is too short for anything but good coffee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img style={{height:"750px"}}
            className="d-block w-100"
            src="Images/img-7.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3 className='w-100 Carousel-h3'>The best way to start your day!</h3>
            <p>Our coffee is roasted to perfection , So drink the best and drink the local
                We make your morning a little easier</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
