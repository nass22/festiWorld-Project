import { Grid } from '@mui/material';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function News() {
  return <div style={{marginTop:'2rem'}}>
   
      <Container fluid>

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
        <Card.Title style={{textAlign:'start', display:"flex", justifyContent:"flex-start", fontSize:'25px', fontFamily:'cantarell', marginTop:'4rem', marginLeft:'3rem', color:""}}>Our Story</Card.Title>
    <Card.Text style={{textAlign:'start', display:"flex", justifyContent:"flex-start", marginTop:'1rem',marginLeft:'3rem',  fontFamily:'poppins', fontSize:"40px", fontFamily:"'Orbitron", fontWeight:"bolder"}}>
  100% Electronic Music 
    </Card.Text>
        </Grid>
        <Grid item xs={6} md={6} style={{marginBottom:"4rem"}}>
    <Card.Text style={{textAlign:'start', display:"flex", justifyContent:"flex-start", marginTop:'1rem', fontFamily:'poppins', textAlign:'justify', marginRight:'3rem', marginBottom:"3rem",  marginLeft:'3rem', }}>

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book . 

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .

    </Card.Text>
    
        </Grid>
      </Grid>
      <Col  >
  <Card.Img variant="top" style={{objectFit: 'cover',
                    width: '100%',
                    height: '80vh'}} src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
  </Col>
    </Box>

</Container>

  </div>;
}


export default News;
