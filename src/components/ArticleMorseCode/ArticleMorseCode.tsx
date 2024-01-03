import { Container, styled } from '@mui/material';
import Column from '../Column/Column';
import * as React from 'react';
import MorseTypography from '../../theme/MorseTypography';

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
}));

const Colored = styled('span')(({ theme }) => ({
  color: theme.palette.custom.accentGreen,
}));
export default function ArticleMorseCode() {
  return (
    <StyledContainer id={'what-is-morse-code'}>
      <Column width={'100%'}>
        <MorseTypography
          fontSize={{ xs: '42px', sm: '48px', md: '52px', lg: '58px' }}
          marginBottom={'50px'}>
          What is Morse code<Colored>?</Colored>
        </MorseTypography>
        <Column gap={'30px'}>
          <MorseTypography
            fontSize={{ xs: '16px', sm: '20px', md: '26px', lg: '28px' }}>
            Morse code is a method of encoding text characters using sequences
            of dots and dashes (or short and long signals) to represent letters,
            numerals, punctuation, and special characters. It was developed by
            Samuel Morse and Alfred Vail in the 1830s and 1840s for use with
            their newly invented telegraph.
          </MorseTypography>
          <MorseTypography
            fontSize={{ xs: '16px', sm: '20px', md: '26px', lg: '28px' }}>
            In Morse code, each letter of the alphabet and each numeral is
            represented by a unique combination of dots and dashes. For example,
            the letter &quot;A&quot; is represented by &quot;.-&quot; and the letter &quot;B&quot; is
            represented by &quot;-...&quot;. The code is designed to be easily
            transmittable over telegraph lines, using simple on-off keying of an
            electrical signal.
          </MorseTypography>
          <MorseTypography
            fontSize={{ xs: '16px', sm: '20px', md: '26px', lg: '28px' }}>
            Morse code has been widely used in various forms of communication,
            including telegraphy, radio communication, and navigation. It played
            a crucial role in early long-distance communication before the
            advent of more advanced technologies. While it is no longer a
            primary means of communication, Morse code is still used in certain
            contexts, such as amateur radio, aviation, and as a backup
            communication method in emergencies.
          </MorseTypography>
        </Column>
      </Column>
    </StyledContainer>
  );
}
