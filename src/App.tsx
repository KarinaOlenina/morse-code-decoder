import React from 'react';
import Bunner from './components/Banner/Bunner';
import Decoder from './components/Decoder/Decoder';
import { Box, styled } from '@mui/material';

const AppWrapper = styled(Box)(() => ({
  color: '#000',
  backgroundColor: '#fff',
  fontFamily: 'Poiret One, sans-serif',
}));

function App() {
  return (
    <AppWrapper>
      <Bunner />
      <Decoder />
    </AppWrapper>
  );
}

export default App;
