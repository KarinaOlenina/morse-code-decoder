import React from "react";
import { Container, Link as MuiLink, styled } from "@mui/material";
import Row from "../Row/Row";
import Column from "../Column/Column";
import MorseTypography from "../../theme/MorseTypography";
import {useTheme} from "@mui/material/styles";

const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    height: '50vh',
    alignItems: 'center',
}));

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
    <MorseTypography variant={'rm28'}>
        <MuiLink href={href} color="inherit" underline="none">
            {children}
        </MuiLink>
    </MorseTypography>
);

const Footer: React.FC = () => {
    const theme = useTheme();

    return (
        <footer style={{backgroundColor: theme.palette.custom.backgroundModule}}>
            <StyledContainer>
                <Row height={'100%'}>
                    <Column />
                    <Column width={'100%'} height={'100%'} justifyContent={'space-around'}>
                        <Row justifyContent={'space-between'} fontSize={'28px'}>
                            <FooterLink href={'#banner-section'}>Banner</FooterLink>
                            <FooterLink href={'#morse-decoder-section'}>Morse code Decoder</FooterLink>
                            <FooterLink href={'#morse-code-alphabet'}>Morse Code alphabet</FooterLink>
                            <FooterLink href={'#what-is-morse-code'}>What is Morse code?</FooterLink>
                        </Row>
                        <Row justifyContent={'space-between'}>
                            <MorseTypography variant={'rsm14'}>Copyright 2023. All Rights Reserved</MorseTypography>
                            <MorseTypography variant={'rsm14'}>
                                <MuiLink color="inherit" href="https://github.com/KarinaOlenina/morse-code-decoder" target="_blank">
                                    Github
                                </MuiLink>
                            </MorseTypography>
                        </Row>
                    </Column>
                </Row>
            </StyledContainer>
        </footer>
    );
};

export default Footer
