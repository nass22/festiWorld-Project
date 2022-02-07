import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SearchInput from './SearchInput';
import { Box, Typography } from '@mui/material';

function BoxDate() {
  return <Box
  justifyContent="center"
   sx={{
  paddingTop:10,
   width:'100%',
   height: '60vh',
   minHeight: 500,
 
   
     backgroundColor: '#90ABD6',
 
   }}>
       <DateRangeIcon  style={{ fontSize: 90, alignItems:'center', color:"white"
        }}/>
      
       
       <Typography
         align="center"
         variant="h3"
         sx={{ mb: 4, mt:3, color:"white"}}
       >
      Search By Date
       </Typography>
       <SearchInput
       >
      
       </SearchInput>
       </Box>;
}

export default BoxDate;
