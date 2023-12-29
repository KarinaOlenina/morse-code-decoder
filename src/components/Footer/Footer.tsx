import React from "react";
import {Container, Link, styled} from "@mui/material";
import Row from "../Row/Row";
import Column from "../Column/Column";


const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    height: '50vh',
    alignItems: 'center',
}));

export const Footer = () => {
    return (
        <footer style={{backgroundColor: '#F5F5F5'}}>
            <StyledContainer>
                <Row height={'100%'}>
                    <Column>
                    </Column>
                    <Column width={'100%'} height={'100%'} justifyContent={'space-around'}>
                        <Row justifyContent={'space-between'} fontSize={'28px'}>
                            <Link href={'#banner-section'} color="inherit" underline="none">Banner</Link>
                            <Link href={'#morse-decoder-section'} color="inherit" underline="none">Morse code Decoder</Link>
                            <Link href={'#morse-code-alphabet'} color="inherit" underline="none">Morse Code alphabet</Link>
                            <Link href={'#what-is-morse-code'} color="inherit" underline="none">What is Morse code?</Link>
                        </Row>
                        <Row justifyContent={'space-between'} >
                            <p>Copyright 2023. All Rights Reserved</p>
                            <Link color="inherit" href="https://github.com/KarinaOlenina/morse-code-decoder" target="_blank">Github</Link>
                        </Row>
                    </Column>
                </Row>
            </StyledContainer>
        </footer>
    )
}