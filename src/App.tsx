import React from 'react';
import Bunner from './components/Banner/Bunner';
import Decoder from './components/Decoder/Decoder';
import { Box, styled } from '@mui/material';
import AlphabetTable from "./components/Table/AlphabetTable";
import ArticleMorseCode from "./components/ArticleMorseCode/ArticleMorseCode";
import Footer from "./components/Footer/Footer";

const AppWrapper = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.custom.background,
    color: theme.palette.custom.textPrimary,
    overflow: 'hidden',
}));

function App() {
    return (
        <AppWrapper>
            <Bunner />
            <Decoder />
            <AlphabetTable/>
            <ArticleMorseCode/>
            <Footer/>
        </AppWrapper>
    );
}

export default App;
