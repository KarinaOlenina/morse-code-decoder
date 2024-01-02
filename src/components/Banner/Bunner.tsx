import React, { useEffect, useState } from 'react';
import {Box, ButtonBase, Container, Link, styled} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import '@fontsource/poiret-one';

// @ts-ignore
import morseImg from '../../assets/img/morse.svg';
import MorseTypography from "../../theme/MorseTypography";
import Row from '../Row/Row';
import Column from '../Column/Column';
import ThemeToggle from "../../theme/components/ThemeToggle";

const StyledContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  gap: '25px',
  height: '100vh',
  alignItems: 'center',
  maxWidth: 'lg',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',

    '& > div:nth-of-type(2)': {
      display: 'none',
    },
  },
}));

const StyledColumn = styled(Column)(({theme}) => ({
  paddingLeft: '50px',

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '20px',
  },
}));

const StyledTryButton = styled(ButtonBase)(({theme}) => ({
  padding: '10px 12px',
  height: '64px',
  cursor: 'pointer',
  width: '230px',
  marginTop: '35px',
  borderTop: `2px solid ${theme.palette.custom.textPrimary}`,
  borderRight: `2px solid ${theme.palette.custom.textPrimary}`,
}));

const Colored = styled('span')(({ color, theme }) => ({
  color: color === 'pinkColor' ? theme.palette.custom.accentPink : theme.palette.custom.accentGreen,
}));

const StyledImg = styled('img')(() => ({
  image: {
    width: '100%',
    height: '100%',
  },

  width: '300%',
  objectFit: 'cover',
  opacity: 0.1,
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
    <StyledContainer id={'banner-section'}>
      <StyledColumn>
        <ThemeToggle />
        <Box>
          <MorseTypography
              fontSize={{ xs: '62px',sm: '62px', md: '62px',  lg: '72px' }}
            variant="h1">
            Morse C<Colored color={'pinkColor'}>o</Colored>de Dec
            <Colored color={'lightGreenColor'}>o</Colored>der
          </MorseTypography>
        </Box>
        <Link href={'#morse-decoder-section'} color="inherit" underline="none">
          <StyledTryButton>
            <MorseTypography
                variant={'rxlg38'}>
            <span
                className="txt-rotate"
                data-period="1000"
                data-rotate='[ "- .-. -.--", "Try" ]'>
              <span className="wrap">{displayedText}</span>
            </span>
            </MorseTypography>
            <SouthIcon
                style={{
                  position: 'absolute',
                  right: '-13px',
                  top: '60px',
                }}/>
          </StyledTryButton>
        </Link>
      </StyledColumn>
      <Row>
        <Box>
          <StyledImg width={'100%'} src={morseImg} alt={'logo'}/>
        </Box>
      </Row>
    </StyledContainer>
  );
}
