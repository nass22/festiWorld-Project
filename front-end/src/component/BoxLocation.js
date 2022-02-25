import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchInput from './SearchInput';
import { Box, Typography } from '@mui/material';

function BoxLocation() {
  return <Box
    justifyContent="center"
    sx={{

      width: "100%",
      paddingTop: 10,
      height: '60vh',
      minHeight: 500,
      textAlign: "center",
      backgroundColor: '#DEBEB3',
    }}>

    <LocationOnIcon style={{ fontSize: 90, alignItems: 'center', color: "white" }} />


    <Typography
      align="center"
      variant="h3"
      sx={{ mb: 4, mt: 3, color: "white" }}
    >
      Search By location
    </Typography>
    <SearchInput
    >

    </SearchInput>
  </Box>
    ;
}

export default BoxLocation;
