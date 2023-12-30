import React from 'react';
import {Box, ButtonBase, Container, Link, styled} from '@mui/material';
import Row from '../Row/Row';
import Column from '../Column/Column';
import '@fontsource/poiret-one';
// @ts-ignore
import morseImg from '../../assets/img/morse.svg';
// @ts-ignore
import arrowDown from '../../assets/img/arrow-down.svg';
import { useEffect, useState } from 'react';
import MorseTypography from "../../theme/MorseTypography";

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
}));

const StyledTryButton = styled(ButtonBase)(({theme}) => ({
  padding: '10px 12px',
  height: '64px',
  backgroundColor: theme.palette.custom.background,
  cursor: 'pointer',
  width: '230px',
  marginTop: '35px',
  borderTop: '2px solid #000',
  borderRight: '2px solid #000',
}));

const Colored = styled('span')(({ color, theme }) => ({
  color: color === 'pinkColor' ? theme.palette.custom.accentPink : theme.palette.custom.accentGreen,
}));

const StyledImg = styled('img')(() => ({
  image: {
    width: '100%',
    height: '100%',
  },
}));

export default function Banner(): JSX.Element {
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [animationSpeed, setAnimationSpeed] = useState<number>(
    300 - Math.random() * 100
  );
  const textsToRotate: string[] = ['- .-. -.--', 'Try'];
  const animationInterval: number = 2000;

  useEffect(() => {
    const ticker: NodeJS.Timer = setInterval(() => tick(), animationSpeed);
    return () => clearInterval(ticker);
  }, [displayedText, animationSpeed]);

  const tick = (): void => {
    const currentIndex: number = loopIndex % textsToRotate.length;
    const currentText: string = textsToRotate[currentIndex];
    const updatedText: string = isDeleting
      ? currentText.substring(0, displayedText.length - 1)
      : currentText.substring(0, displayedText.length + 1);

    setDisplayedText(updatedText);

    if (isDeleting) {
      setAnimationSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === currentText) {
      setIsDeleting(true);
      setAnimationSpeed(animationInterval);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopIndex((prevIndex) => prevIndex + 1);
      setAnimationSpeed(500);
    }
  };

  return (
    <StyledContainer maxWidth="lg" style={{ gap: '25px' }} id={'banner-section'}>
      <Column>
        <Box>
          <MorseTypography
            fontSize={'72px'}
            variant="h1">
            Morse C<Colored color={'pinkColor'}>o</Colored>de Dec
            <Colored color={'lightGreenColor'}>o</Colored>der
          </MorseTypography>
        </Box>
        <Link href={'#morse-decoder-section'} color="inherit" underline="none">
        <StyledTryButton>
            <MorseTypography
                fontWeight={700}
                variant={'rxlg38'}>
            <span
                className="txt-rotate"
                data-period="1000"
                data-rotate='[ "- .-. -.--", "Try" ]'>
              <span className="wrap">{displayedText}</span>
            </span>
            </MorseTypography>
          <img style={{
            position: 'absolute',
            right: '-17px',
            top: '60px',
          }} src={arrowDown} alt={'arrowDown'} />
        </StyledTryButton>
        </Link>
      </Column>
      <Row>
        <Box>
          <StyledImg width={'100%'} src={morseImg} alt={'logo'} />
        </Box>
      </Row>
    </StyledContainer>
  );
}
