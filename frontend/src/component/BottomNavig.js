import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Paper from '@mui/material/Paper';

import Home from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';







export default function FixedBottomNavigation() {
 
  return (
    <Box  sx={{pb: 7 }} >
      <CssBaseline />
     
      <Paper   sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgColor: 'red'}} elevation={3} >
        <BottomNavigation style={{ background: 'black' }}
          showLabels
        >
          <BottomNavigationAction className='a' href="/" style={{ color: 'white' }} label="Home"  icon={<Home  />}  />
          <BottomNavigationAction  className='a' href="/events" label="All Events" style={{ color: 'white' }} icon={<PublicIcon />} />
          <BottomNavigationAction className='a' href="/search" style={{ color: 'white' }} label="Search" icon={<SearchIcon style={{ color: 'white' }}/>} />
        </BottomNavigation>
      </Paper>
    </Box>

   
  );
}



