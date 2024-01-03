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
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Container, styled } from '@mui/material';
import Column from '../Column/Column';
import MorseTypography from '../../theme/MorseTypography';

const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  height: '75vh',
  borderRadius: '5px',
  boxShadow: theme.palette.custom.deepShadow,
  backgroundColor: theme.palette.custom.background,

  '& button': {
    color: theme.palette.custom.accentPink,
  },

  '& button.Mui-disabled': {
    color: theme.palette.custom.textTertiary,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '20px',
  color: theme.palette.custom.textPrimary,
  backgroundColor: theme.palette.custom.background,

  '& td.MuiTableCell-footer': {
    border: 'none',
  },
}));

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
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
  morseCodeRow3: string
) {
  return {
    letterRow1,
    morseCodeRow1,
    letterRow2,
    morseCodeRow2,
    letterRow3,
    morseCodeRow3,
  };
}

const rows = [
  createData('A', '.-', 'J', '.---', 'S', '...'),
  createData('B', '-...', 'K', '-.-', 'T', '-'),
  createData('C', '-.-.', 'L', '.-..', 'U', '..-'),
  createData('D', '-..', 'M', '--', 'V', '...-'),
  createData('E', '.', 'N', '-.', 'W', '.--'),
  createData('F', '..-.', 'O', '---', 'X', '-..-'),
  createData('G', '--.', 'P', '.--.', 'Y', '-.--'),
  createData('H', '....', 'Q', '--.-', 'Z', '--..'),
  createData('I', '..', 'R', '.-.', '', ''),
  createData('1', '.----', '2', '..---', '3', '...--'),
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
  const theme = useTheme();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <StyledContainer id={'morse-code-alphabet'}>
      <Column width={'100%'}>
        <MorseTypography
          fontSize={{ xs: '42px', sm: '48px', md: '52px', lg: '58px' }}
          marginBottom={'50px'}>
          Morse Code alphabet
        </MorseTypography>
        <StyledTableContainer>
          <Table
            sx={{ minWidth: 500, height: '100%' }}
            aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.letterRow1}>
                  <StyledTableCell component="th" scope="row">
                    {row.letterRow1}
                  </StyledTableCell>
                  <StyledTableCell>{row.morseCodeRow1}</StyledTableCell>
                  <StyledTableCell>{row.letterRow2}</StyledTableCell>
                  <StyledTableCell>{row.morseCodeRow2}</StyledTableCell>
                  <StyledTableCell>{row.letterRow3}</StyledTableCell>
                  <StyledTableCell>{row.morseCodeRow3}</StyledTableCell>
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
                  style={{
                    color: theme.palette.custom.textPrimary,
                    border: 'none',
                  }}
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
        </StyledTableContainer>
      </Column>
    </StyledContainer>
  );
}
