import { Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Footer() {
  return <div style={{marginTop:'10rem', textAlign:"center", alignItems:"center"}}>
     <Container fluid style={{backgroundColor:'rgb(24, 24, 24)', color:'white', paddingTop:'1rem'}}>
  <Row className='row-text-center'>
    <Col className='col-md-4'>
    <h5> FestiWolrd</h5>
    <hr style={{color:'white'}} />
    <p>02.86.677.666</p>
		<p>FestiWolrd@gmailcom</p>
		<p> Location Information</p>
		<p> 50000, Country</p>
    </Col>
    <Col className='col-md-4'>
    <Image className='footer-img' src=''></Image>
    <hr style={{color:'white'}} />
    <p>Information</p>
		<p>Information</p>
		<p>Some Other Information</p>
		<p>Other Informations</p>
    </Col>
    <Col className='col-md-4'>
    <Image className='footer-img' src=''></Image>
    <hr style={{color:'white'}} />
    <p>Legal Informations</p>
		<p>Some other Legal Information</p>
		<p>Other Informations</p>
		<p>Other Informations</p>
    </Col>
    <Col className='col-md-12'>
    <hr style={{color:'white'}} />
    <h5>FestiWorld.com</h5>
    </Col>
    


   
  </Row>
</Container>
  </div>;
}

export default Footer;
