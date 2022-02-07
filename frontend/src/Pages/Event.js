import React from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../component/AllEventsCards.css'
import Header from '../component/Header';
import BottomNavig from '../component/BottomNavig';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


function AllEventsCards() {
    return <div style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80" + ")", }}>
        <Header />
        <Container style={{height:'100%'}}>
            <Card style={{ marginTop: 10 }} className="card-event">
                <Card.Img ClassName="CardImg" style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '50vh'
                }} variant="top" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <Card.ImgOverlay className="card-overlay">
                    <div class="row">
                    <h1 className='event-title'>EVENT TITLE</h1>
                    <div className='d-flex justify-content clearfix' style={{ textAlign: 'center', justifyContent: 'center', marginTop:'15px'}}>
                        <h4  className='event-date'style={{ textAlign: 'center', marginRight:'20px' }} >21-23 July 2022</h4>
                        <h4 className='event-location' style={{ textAlign: 'center',marginRight:'20px' }} >Location</h4>
                       <WbSunnyIcon />
                        <h4 className='event-weather' style={{ textAlign: 'center',marginRight:'20px' }} >Weather</h4>
                    </div>

                    <div class="row">
                        <div className="col-sm-12 text-center" style={{marginTop:'15px'}}>
                       
                            <button id="btnClear" className="btn btn-dark btn-md center-block" style={{ width: '120px', marginLeft: '10px' }}   >TICKETS</button>
                        </div>
                    </div>
                    </div>
                </Card.ImgOverlay>
                <Card.Body className='event-body'>
                <Card.Title className="event-body-title"> Description</Card.Title> <hr style={{color:'white'}} />
                <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Card.Text>
                </Card.Body>
                <Card.Body className='event-body'>
                <Card.Title className="event-body-title"> Upcoming Artists</Card.Title> <hr style={{color:'white'}} />
                <ListGroup className="list-group-flush" style={{backgroundColor:'black'}}>
    <ListGroupItem className='artist-name 'style={{backgroundColor:'rgb(24, 24, 24)', color:'white'}}> Artist Name</ListGroupItem>
    <ListGroupItem className='artist-name 'style={{backgroundColor:'rgb(24, 24, 24)', color:'white'}}> Artist Name</ListGroupItem>
    <ListGroupItem className='artist-name 'style={{backgroundColor:'rgb(24, 24, 24)', color:'white'}}> Artist Name</ListGroupItem>
  </ListGroup>
  <button id="btnClear" className="btn btn-dark btn-md center-block" style={{ width: '120px', marginLeft: '10px' }}   >Link</button>
                </Card.Body>
                
            </Card>
            
        </Container>
        <BottomNavig />
    </div>

}

export default AllEventsCards;
