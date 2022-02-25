import React from "react";
import useAxios from "axios-hooks";
import BottomNavig from '../component/BottomNavig';
import { Button, Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../component/AllEventsCards.css';
import Header from '../component/Header';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useParams} from "react-router-dom";




const RenderEvent = (props) => {
    const { title, content, location, artists, image } = props;
   
    return (
      
        <div>
             <Container >
      <Card style={{ marginTop: 10 }} className="card-event">
        <Card.Img ClassName="CardImg" style={{
          objectFit: 'cover',
          width: '100%',
          height: '50vh'
        }} variant="top" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Card.ImgOverlay className="card-overlay">
          <div className="row">
           <h1>{title}</h1>

            <div className='d-flex justify-content clearfix' style={{ textAlign: 'center', justifyContent: 'center', marginTop: '15px' }}>
              <h4 className='event-date' style={{ textAlign: 'center', marginRight: '20px' }} >21-23 July 2022</h4>
              <h4 className='event-location' style={{ textAlign: 'center', marginRight: '20px' }} >{location}</h4>
              <WbSunnyIcon />
              <h4 className='event-weather' style={{ textAlign: 'center', marginRight: '20px' }} >Weather</h4>
            </div>

            <div class="row">
              <div className="col-sm-12 text-center" style={{ marginTop: '15px' }}>
                <Button className='a'   className="btn btn-dark btn-md center-block" style={{ width: '120px', marginRight: '10px' }}  >INFOS</Button>
                <Button id="btnClear" className="btn btn-dark btn-md center-block" style={{ width: '120px', marginLeft: '10px' }}   >TICKETS</Button>
              </div>
            </div>
          </div>
        </Card.ImgOverlay>

        <Card.Body className='event-body'>
        <Card.Title className="event-body-title"> Description</Card.Title> <hr style={{ color: 'white' }} />
         <div>{content}</div> 
          <Card.Title className="event-body-title"> Upcoming Artists</Card.Title> <hr style={{ color: 'white' }} />
          <ListGroup className="list-group-flush" style={{ backgroundColor: 'black' }}>
            <ListGroupItem className='artist-name ' style={{ backgroundColor: 'rgb(24, 24, 24)', color: 'white' }}> {artists}</ListGroupItem>
            <ListGroupItem className='artist-name ' style={{ backgroundColor: 'rgb(24, 24, 24)', color: 'white' }}> Artist Name</ListGroupItem>
            <ListGroupItem className='artist-name ' style={{ backgroundColor: 'rgb(24, 24, 24)', color: 'white' }}> Artist Name</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
      </Container>
           

        </div>
    );
};

const EventList = () => {
    let {id} = useParams();
    const [{ data, loading, error }] = useAxios(
        `http://127.0.0.1:8001/api/festivals/${id}`
    );

    console.log(data,loading,error);
    return (
        <div>
            {data &&
            !error &&
            !loading &&
             
                <RenderEvent
                    title={data.title}
                    content={data.content}
                    location={data.location}
                    artists={data.artists}
                    key={data.index}
                />
            }
            {loading && <p>Loading ...</p>}
            {error && (<p>{error.message}</p>)}
        </div>
    );
};

export default function Event() {
    return (
        <div style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80" + ")", }}>
             <Header />
            <EventList />
            <BottomNavig />
        </div>
    );
}