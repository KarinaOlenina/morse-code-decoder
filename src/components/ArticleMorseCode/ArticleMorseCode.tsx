import {Container, styled, Typography} from "@mui/material";
import Column from "../Column/Column";
import * as React from "react";

const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
}));

const lightGreenColor = '#8CFF79';

const Colored = styled('span')(() => ({
    color: lightGreenColor,
}));
export default function ArticleMorseCode() {
    return(
        <StyledContainer>
            <Column width={'100%'}>
                <Typography fontSize={'58px'} fontFamily={'Poiret One, sans-serif'} marginBottom={'50px'}>
                    What is Morse code<Colored color={'lightGreenColor'}>?</Colored>
                </Typography>
                <Column gap={'30px'}>
                <Typography fontSize={'28px'} fontFamily={'Poiret One, sans-serif'}>
                    Morse code is a method of encoding text characters using sequences of dots and dashes (or short and long signals) to represent letters, numerals, punctuation, and special characters. It was developed by Samuel Morse and Alfred Vail in the 1830s and 1840s for use with their newly invented telegraph.
                </Typography>
                <Typography fontSize={'28px'} fontFamily={'Poiret One, sans-serif'}>
                    In Morse code, each letter of the alphabet and each numeral is represented by a unique combination of dots and dashes. For example, the letter "A" is represented by ".-" and the letter "B" is represented by "-...". The code is designed to be easily transmittable over telegraph lines, using simple on-off keying of an electrical signal.
                </Typography>
                <Typography fontSize={'28px'} fontFamily={'Poiret One, sans-serif'}>
                    Morse code has been widely used in various forms of communication, including telegraphy, radio communication, and navigation. It played a crucial role in early long-distance communication before the advent of more advanced technologies. While it is no longer a primary means of communication, Morse code is still used in certain contexts, such as amateur radio, aviation, and as a backup communication method in emergencies.
                </Typography>
                </Column>
            </Column>
        </StyledContainer>
    )
}