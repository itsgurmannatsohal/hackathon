import "./styles/View.css";
import { useState } from "react";
// import { makeStyles } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import KeyboardArrowDownIcon from '@mui/materials/KeyboardArrowDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/materials/KeyboardArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowDown';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     overflowX: 'auto'
//   },
//   table: {
//     minWidth: 650
//   }
// });

function createData(date, publicKey,hash,signature) {
  return { date, publicKey, hash,signature};
}

const rows = [
  createData(
    '12-11-2022',
    1594566788,
    646758948604,
    2473849348934
  ),
  createData(
    '13-12-2022',
    2375678890000,
    93635845485945,
    3734384893843
  ),
  createData(
    '14-12-2022',
    2625667876544,
    1665748594589,
    2437439489344
  )
];

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

export default function View() {
//   const classes = useStyles();

  return (
    <div className="table">
    <div className="center">
    <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" />
            <TableCell>Date</TableCell>
            <TableCell align="right">Public Key</TableCell>
            <TableCell align="right">Signature</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <ExpandableTableRow
              key={row.hash}
              expandComponent={
                
              <TableCell colSpan="5">{row.hash}</TableCell>}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.publicKey}</TableCell>
              <TableCell align="right">{row.signature}</TableCell>
              
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
    
    </div>
    
  );
}




