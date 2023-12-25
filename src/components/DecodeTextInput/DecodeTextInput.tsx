import React from 'react';
import { Snackbar, styled, TextField, Typography} from '@mui/material';
import {
  VolumeUp as VolumeUpIcon,
  ContentCopy as ContentCopyIcon,
} from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import { morseCodeTranslator } from '../../morseCode/morseCode';
import Column from '../Column/Column';
import Row from '../Row/Row';
import { BaseButton } from '../BaseButton/BaseButton';
import playMorseCodeSound from '../../morseCode/playMorseCodeSound';
import MorseSlider from "../Slider/MorseSlider";

const StyledButton = styled(BaseButton)(() => ({
  display: 'flex',
  width: '50px',
}));

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#bdbdbd',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FF79F2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000000',
      borderRadius: '0px',
    },
    '&:hover fieldset': {
      borderColor: '#808080',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF79F2',
    },
  },
});

export default function DecodeTextInput(): JSX.Element {
  const [inputText, setInputText] = useState<string>('');
  const [morseCodeResult, setMorseCodeResult] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [focusedTextField, setFocusedTextField] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [sliderFrequencyValue, setSliderFrequencyValue] = useState<number>(600);
  const [sliderWpmValue, setSliderWpmValue] = useState<number>(20);

  useEffect(() => {
    if (focusedTextField === 'text') {
      const morseCode = morseCodeTranslator.translateToMorseCode(inputText);
      setMorseCodeResult(morseCode);
    } else {
      const fromMorseCode =
        morseCodeTranslator.translateFromMorseCode(morseCodeResult);
      setInputText(fromMorseCode);
    }
  }, [inputText, morseCodeResult, focusedTextField]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setInputText(inputValue);
    } else {
      setOpenSnackbar(true);
      setSnackbarMessage('Invalid characters. Only Latin letters are allowed.');
    }
  };

  const handleMorseInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    value = value.replace(/\s+/g, ' ');

    if (/^[.\-\s]*$/.test(value)) {
      setMorseCodeResult(value);
      setOpenSnackbar(false);
    } else {
      setOpenSnackbar(true);
      setSnackbarMessage(
        "Invalid Morse code. Only '.', '-', and spaces are allowed."
      );
    }
  };

    const handleSliderWpmChange = (event: Event, newValue: number | number[]) => {
        setSliderWpmValue(newValue as number);
    };
    const handleSliderFrequencyChange = (event: Event, newValue: number | number[]) => {
        setSliderFrequencyValue(newValue as number);
    };

  const handlePlaySoundText = () => {
    // playMorseCodeSound(morseCodeResult);
  };

  const handlePlaySoundMorse = () => {
        playMorseCodeSound(audioRef, morseCodeResult, sliderWpmValue, sliderFrequencyValue);
    };


  const handleCopyText = () => {
    navigator.clipboard.writeText(inputText);
    setOpenSnackbar(true);
    setSnackbarMessage('Text copied to clipboard.');
  };

  const handleCopyMorse = () => {
    navigator.clipboard.writeText(morseCodeResult);
    setOpenSnackbar(true);
    setSnackbarMessage('Morse code copied to clipboard.');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleFocusChange = (fieldName: string) => {
    setFocusedTextField(fieldName);
  };

  const renderButtons = (type: string) => (
    <Row>
      <Row>
        <Typography fontSize={'58px'} fontFamily={'Poiret One, sans-serif'}>
          {type === 'morse' ? 'Morse' : 'Text'}
        </Typography>
      </Row>
      <Row justify={'end'}>
        <StyledButton
          color="primary"
          onClick={type === 'morse' ? handlePlaySoundMorse : handlePlaySoundText}>
          <VolumeUpIcon />
        </StyledButton>
        <audio ref={audioRef}></audio>
        <StyledButton
          color="primary"
          onClick={type === 'morse' ? handleCopyMorse : handleCopyText}>
          <ContentCopyIcon />
        </StyledButton>
      </Row>
    </Row>
  );

  return (
      <Column gap={'50px'} width={'100%'}>
          <Row gap={'50px'}>
              <Column width={'50%'} alignItems={'end'}>
                  {renderButtons('text')}
                  <StyledTextField
                      label={`Enter Text`}
                      multiline
                      maxRows={20}
                      minRows={10}
                      variant="outlined"
                      fullWidth
                      value={inputText}
                      onChange={handleInputChange}
                      onFocus={() => handleFocusChange('text')}
                  />
              </Column>
              <Column width={'50%'} alignItems={'end'}>
                  {renderButtons('morse')}
                  <StyledTextField
                      label={`Enter Morse Code`}
                      multiline
                      maxRows={20}
                      minRows={10}
                      variant="outlined"
                      fullWidth
                      value={morseCodeResult}
                      onChange={handleMorseInputChange}
                      onFocus={() => handleFocusChange('morse')}
                  />
              </Column>
              <Snackbar
                  open={openSnackbar}
                  autoHideDuration={3000}
                  onClose={handleCloseSnackbar}
                  message={snackbarMessage}
              />
          </Row>
          <Column>
              <MorseSlider
                  value={sliderWpmValue}
                  label={'wpm'}
                  onChange={handleSliderWpmChange}
                  valueLabelDisplay={"auto"}
                  step={5}
                  min={5}
                  max={60}
              />
              <MorseSlider
                  value={sliderFrequencyValue}
                  label={'Frequency'}
                  onChange={handleSliderFrequencyChange}
                  valueLabelDisplay={"auto"}
                  step={100}
                  min={100}
                  max={1600}
              />
          </Column>
      </Column>
  );
}
