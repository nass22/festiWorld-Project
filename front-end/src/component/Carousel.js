import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './BootsrapCarousel.css';
import { Button, Container } from 'react-bootstrap';
  
export default function Slide() {
  return (

    <Container  fluid  className='container-fluid p-0' style={{p:0}}>
      <Carousel style={{width:"100%"}}>
        <Carousel.Item interval={2500} className='item'>
          <img style={{height:565, objectFit:'cover'}}
            className="d-block w-100"
src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Image One"
          />
          <Carousel.Caption className='caption'>   <h1 className='carousel-title'>TECHNO WORLD</h1>
          <div className='d-flex justify-content clearfix' style={{ textAlign: 'center', justifyContent: 'center', marginTop:'25px'}}>
 
                        <h5  className='carousel-date'style={{ textAlign: 'center', marginRight:'20px' }} >21-23 July 2022</h5>
                        <h5 className='carousel-location' style={{ textAlign: 'center',marginRight:'20px' }} >Location</h5>
                       
                        
                    </div>
          <Button className='a' href="/events" variant="dark" style={{width:200, height:40,opacity:'0.90', marginTop:'15px' }}>See All Events</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img style={{height:565, objectFit:'cover'}}
            className="d-block w-100"
src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Image Two"
          />
          <Carousel.Caption className='caption'>
            <h1 className='carousel-title'>EXTRAVAGANZA</h1>
            <div className='d-flex justify-content clearfix' style={{ textAlign: 'center', justifyContent: 'center', marginTop:'20px'}}>
 
                        <h5  className='carousel-date'style={{ textAlign: 'center', marginRight:'20px' }} >26-28 July 2022</h5>
                        <h5 className='carousel-location' style={{ textAlign: 'center',marginRight:'15px'}} >Location</h5>
                       
                        
                    </div>
            <Button className='a' href="/events" variant="dark" style={{width:200, height:40,opacity:'0.90',marginTop:'25px' }}>See All Events</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>

  );
}