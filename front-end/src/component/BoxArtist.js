import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchInput from './SearchInput';
import { Box, Typography } from '@mui/material';


function BoxArtist() {
  return <Box
    justifyContent="center"
    sx={{
      paddingTop: 10,
      width: '100%',
      height: '60vh',
      backgroundColor: '#78D3B9',
      textAlign: "center"
    }}>
    <MusicNoteIcon style={{
      fontSize: 90, alignItems: 'center', color: "white",
    }} />

    <Typography
      align="center"
      variant="h3"
      sx={{ mb: 4, mt: 3, color: "white" }}
    >
      Search By Artist
    </Typography>
    <SearchInput
    >
    </SearchInput>
  </Box>;;
}

export default BoxArtist;
