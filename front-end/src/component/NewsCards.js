import * as React from 'react';
import useAxios from "axios-hooks";
import "../component/NewsCards.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';


const RenderNews  = (props) => {
  const { title, content, id} = props;

  return (

<div>  
      <Container fluid className="container-news">

        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}  
             
                direction="row"
                justify="flex-start"
                alignItems="flex-start" >
   
            <Grid item xs={12} md={12} lg={4} style={{ alignItems: "center", justifyContent: 'center', display: "flex", flexDirection:"row" }}>
              <Card sx={{ maxWidth: 700 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1526933939726-28eb126974ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
      
          </Grid>
        </Box>
      </Container>
      </div> 
      );
};

const NewsList = () => {
  const [{ data, loading, error }] = useAxios(
      "http://127.0.0.1:8001/api/news"
  );

  return (
    <div>
        {data &&
        !error &&
        !loading &&
        data.map((item, index) => (
            <RenderNews
                title={item.title} 
                content={item.content}
                id={item.id}
                key={index}
            />
        ))}
        {loading && <p>Loading ...</p>}
        {error && (<p>{error.message}</p>)}
    </div>
);
};

export default function News() {
  return (

           <div style={{padding:20, alignItems:"center", textAlign:"center", marginTop:'2rem'}} >
    <div id='border-wrapper'>
    <h5 className='search-menu-title' style={{textAlign:"center", fontFamily:"orbitron", alignItems:"center"}}> WHAT'S UP IN FESTIWORLD?</h5>
    <div id='border'></div>
    </div>
          <NewsList style={{display:"flex", flexDirection:"row"}} />
         
      </div>
  );
}