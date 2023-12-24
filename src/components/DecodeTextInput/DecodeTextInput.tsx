import React from 'react';
import { Snackbar, styled, TextField } from "@mui/material";
import { VolumeUp as VolumeUpIcon, ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { useEffect, useRef, useState } from "react";
import { morseCodeTranslator } from "../../morseCode";
import Column from "../Column/Column";
import Row from "../Row/Row";
import { BaseButton } from "../BaseButton/BaseButton";

const StyledButton = styled(BaseButton)(() => ({
    display: 'flex',
    width: '50px',
}));

export default function DecodeTextInput(): JSX.Element {
    const [inputText, setInputText] = useState<string>("");
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [morseCodeResult, setMorseCodeResult] = useState<string>("");
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [focusedTextField, setFocusedTextField] = useState<string | null>(null);

    useEffect(() => {
        if (focusedTextField === 'text') {
            const morseCode = morseCodeTranslator.translateToMorseCode(inputText);
            setMorseCodeResult(morseCode);
        } else {
            const fromMorseCode = morseCodeTranslator.translateFromMorseCode(morseCodeResult);
            setInputText(fromMorseCode);
        }
    }, [inputText, morseCodeResult, focusedTextField]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleMorseInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        // Replace multiple spaces with a single space
        value = value.replace(/\s+/g, ' ');

        // Check if the entered value contains only '-' and '.' using a regular expression
        if (/^[.\-\s]*$/.test(value)) {
            setMorseCodeResult(value);
        }
    };

    const handlePlaySound = () => {
        playMorseCodeSound(morseCodeResult);
    };

    const playMorseCodeSound = (morseCode: string) => {
        if (audioRef.current) {
            audioRef.current.src = generateAudioUrl(morseCode);
            audioRef.current.play();
        }
    };

    const generateAudioUrl = (morseCode: string) => {
        // Логіка генерації аудіофайлу Morse-коду
        console.log(morseCode)
        return "";
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(inputText);
        setOpenSnackbar(true);
    };

    const handleCopyMorse = () => {
        navigator.clipboard.writeText(morseCodeResult);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleFocusChange = (fieldName: string) => {
        setFocusedTextField(fieldName);
    };

    const renderButtons = (type: string) => (
        <Row justifyContent={'end'}>
            <StyledButton color="primary" onClick={handlePlaySound}>
                <VolumeUpIcon />
            </StyledButton>
            <audio ref={audioRef}></audio>
            <StyledButton color="primary" onClick={ type === 'morse' ? handleCopyMorse : handleCopyText}>
                <ContentCopyIcon />
            </StyledButton>
        </Row>
    );


    return (
        <Row gap={'50px'}>
            <Column width={'50%'} alignItems={'end'}>
                {renderButtons('text')}
                <TextField
                    label={`Enter Text`}
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={inputText}
                    onChange={handleInputChange}
                    onFocus={() => handleFocusChange('text')}
                />
            </Column>
            <Column width={'50%'} alignItems={'end'}>
                {renderButtons('morse')}
                <TextField
                    label={`Enter Morse Code`}
                    multiline
                    rows={4}
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
                message="Text copied to clipboard"
            />
        </Row>
    );
}
