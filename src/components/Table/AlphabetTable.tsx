import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {Container, styled} from "@mui/material";
import Column from '../Column/Column';
import MorseTypography from "../../theme/MorseTypography";

const StyledContainer = styled(Container)(() => ({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
}));

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(
    letterRow1: string,
    morseCodeRow1: string,
    letterRow2: string,
    morseCodeRow2: string,
    letterRow3: string,
    morseCodeRow3: string,
) {
    return { letterRow1, morseCodeRow1, letterRow2, morseCodeRow2, letterRow3, morseCodeRow3 };
}

const rows = [
    createData('A', '.-', 'J', '.---', 'S', '...' ),
    createData('B', '-...', 'K', '-.-', 'T', '-'),
    createData('C', '-.-.', 'L', '.-..', 'U', '..-'),
    createData('D', '-..', 'M', '--', 'V', '...-'),
    createData('E', '.', 'N', '-.', 'W', '.--'),
    createData('F', '..-.', 'O', '---', 'X', '-..-'),
    createData('G', '--.', 'P', '.--.', 'Y', '-.--'),
    createData('H', '....', 'Q', '--.-', 'Z', '--..'),
    createData('I', '..', 'R', '.-.', '', ''),
    createData('1', '.----','2', '..---', '3', '...--'),
    createData('4', '....-', '5', '.....', '6', '-....'),
    createData('7', '--...', '8', '---..', '9', '----.'),
    createData('0', '-----', '', '', '', ''),
    createData('.', '.-.-.-', ',', '--..--', '?', '..--..'),
    createData("'", '.----.', '!', '-.-.--', '/', '-..-.'),
    createData('(', '-.--.', ')', '-.--.-', '&', '.-...'),
    createData(':', '---...', ';', '-.-.-.', '=', '-...-'),
    createData('+', '.-.-.', '-', '-....-', '_', '..--.-'),
    createData('"', '.-..-.', '$', '...-..-', '@', '.--.-.'),
    createData('¿', '..-.-', '¡', '--...-', '', ''),
];

export default function AlphabetTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(9);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <StyledContainer id={'morse-code-alphabet'}>
            <Column width={'100%'}>
                <MorseTypography variant={'rxlg58'} marginBottom={'50px'}>
                    Morse  Code alphabet
                </MorseTypography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableBody>
                            {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                            ).map((row) => (
                                <TableRow key={row.letterRow1}>
                                    <TableCell style={{fontSize: '20px'}} component="th" scope="row">{row.letterRow1}</TableCell>
                                    <TableCell style={{fontSize: '20px'}}>{row.morseCodeRow1}</TableCell>
                                    <TableCell style={{fontSize: '20px'}}>{row.letterRow2}</TableCell>
                                    <TableCell style={{fontSize: '20px'}}>{row.morseCodeRow2}</TableCell>
                                    <TableCell style={{fontSize: '20px'}}>{row.letterRow3}</TableCell>
                                    <TableCell style={{fontSize: '20px'}}>{row.morseCodeRow3}</TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[9]}
                                    colSpan={3}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Column>
        </StyledContainer>
    );
}