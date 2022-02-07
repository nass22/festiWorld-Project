import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


function News() {
  return <div style={{marginTop:'2rem'}}>
   
   <div id='border-wrapper' class='animate__bounceInLeft'>
    <h5 className='search-menu-title'> WHAT'S UP IN FESTIWORLD?</h5>
    <div id='border'></div>
    </div>

      <Container>
      <Card style={{displa:'flex', flexDirection:'row', width: '100%', height:'100%', marginTop:'2rem', justifyContent:'center', alignItems:'center', backgroundColor:'#FD8282', color:'white' }}>
  <Row className='no-gutters'>
  <Col md={6} lg={6}  >
  <Card.Img variant="top" style={{objectFit: 'cover',
                    width: '100%',
                    height: '50vh'}} src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title style={{textAlign:'start',fontSize:'30px', fontFamily:'cantarell', fontWeight:'bolder', marginTop:'1rem'}}>Dj Techno is comming to Techno World</Card.Title>
    <Card.Text style={{textAlign:'start',marginTop:'1rem', fontFamily:'poppins', textAlign:'justify'}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book . 
    </Card.Text>
    
  </Card.Body>
  </Col>
  </Row>
</Card>
<Card style={{displa:'flex', flexDirection:'row', width: '100%', height:'100%', marginTop:'2rem', justifyContent:'center', alignItems:'center', backgroundColor:'#FD8282', color:'white' }}>
  <Row className='no-gutters'>
  <Col md={6} lg={6}  >
  <Card.Img variant="top" style={{objectFit: 'cover',
                    width: '100%',
                    height: '50vh'}} src="https://images.unsplash.com/photo-1541126274323-dbac58d14741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title style={{  textAlign:'start',fontSize:'30px',marginTop:'1rem', fontFamily:'cantarell', fontWeight:'bolder'}}>News Artists announced </Card.Title>
    <Card.Text style={{textAlign:'start', marginTop:'1rem'}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book . 
    </Card.Text>

  </Card.Body>
  </Col>
  </Row>
</Card>
</Container>

  </div>;
}


export default News;
