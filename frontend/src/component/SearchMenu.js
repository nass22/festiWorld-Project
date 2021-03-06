import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './SearchMenu.css';

function SearchMenu() {
  return <div style={{padding:20}} >
    <div id='border-wrapper'>
    <h5 className='search-menu-title'> ORGANIZE YOUR TRIP WITH FESTIWORLD!</h5>
    <div id='border'></div>
    </div>
  <Container  className='container-search'>

     <Form className="text-center" style={{width: "100%"}} >
  <Row className="align-items-center-search" >
    <Col xs="auto">
      <Form.Label className="input"   visuallyHidden >
        Location
      </Form.Label>
      <Form.Control
        
        id="inlineFormInput"
        placeholder="Select your location"
      />
    </Col>
    <Col xs="auto">
    <Form.Select className="input-search" className="mb-1" aria-label="Default select example">
  <option>Select your date</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
    </Col>
    <Col xs="auto">
    <Form.Select  className="input-search" className="mb-1"  aria-label="Default select example">
  <option>Select music type/artists</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
    </Col>
    <Col xs="auto">
    <Form.Select className="input-search" className="mb-1"  aria-label="Default select example">
  <option>Other options</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
    </Col>
    
    
    <Col xs="auto">
      <Button type="submit" variant="dark" className="mb-2" >
        Search
      </Button>

    </Col>
  </Row>
</Form>

  </Container>
  </div>;
}

export default SearchMenu;

