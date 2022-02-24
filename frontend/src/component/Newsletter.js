import * as React from 'react';
import '../component/Newsletter.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Mailchimp from './Mailchimp';







function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <Container component="section" sx={{ mt: 20, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#FFAFAF',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" className="n" onSubmit={handleSubmit} sx={{ maxWidth: 400, zIndex: '3' }}>
              <Typography variant="h2" style={{ color: "white", fontWeight: 'normal', fontFamily: 'poppins' }} component="h2" gutterBottom>
                NEWSLETTER
              </Typography>
              <Typography variant="h5" style={{ color: "white", fontFamily: 'poppins' }}>
                Festiworld's Newsletter will keep you in touch we the latest updates.
              </Typography>

                <Mailchimp />

            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1578946956088-940c3b502864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2523&q=80"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>

    </Container>
 
  );
}

export default ProductCTA;