import {Container, styled} from "@mui/material";
import DecodeTextInput from "../DecodeTextInput/DecodeTextInput";

const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
}));



export default function Decoder(): JSX.Element {


    return (
        <StyledContainer maxWidth="lg" style={{gap: '25px'}}>
            <DecodeTextInput />
        </StyledContainer>
    )
}