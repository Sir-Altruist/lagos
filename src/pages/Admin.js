import React, { useState, useEffect } from 'react';
import { 
    Box,
    Container, 
    Table, 
    TableBody, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Button, 
    TextField,
    InputAdornment,
    // IconButton,
    TablePagination,
    TableFooter,
    Checkbox
} from '@mui/material'
import LoopIcon from '@mui/icons-material/Loop';
import { data } from '../Component/data'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import axios from 'axios';
import moment from 'moment';
import TablePaginationAction from '../Component/TablePaginationAction';
import TableToolbar from '../Component/TableTooltip'
import { v4 as uuidv4 } from 'uuid'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const CheckBoxHead = (props) => {

  const { onSelectAllClick,  numSelected, rowCount } = props;

  return (

    <StyledTableCell padding='checkbox'>
    <Checkbox
    color="primary"
    indeterminate={numSelected > 0 && numSelected < rowCount}
    checked={rowCount > 0 && numSelected === rowCount}
    onChange={onSelectAllClick}
    inputProps={{
      'aria-label': 'select all desserts',
      }}
    />
    </StyledTableCell>
  //    <FormControlLabel  
  //    control={
  //      <Checkbox
        //  checked={cryon}
  //        onChange={this.handleChange('cryon')}
  //        style ={{
  //          color: "#00e676",
  //        }}
  //        value="cryon"
  //      />
  //    }
  //  />
  )
}

const Admin = () => {
    
    const [items, setItems] = useState([])
    //search query
    const [q, setQ] = useState('')
    //loading
    const [loading, setLoading] = useState(false)
    //Pagination
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    //checkbox
    const [selected, setSelected] = useState([]);


    useEffect(() => {
      // const getData = async() => {
      //   try {
      //      const response = await axios.get("http://localhost:8000/portals/")
          
      //      const {data} = response
      //      setItems(data)

      //      console.log(data)
      //   }
      //   catch(error){
      //        console.log(error)
      //   }
      // }
      //   getData()
      setItems(data)
    }, [])

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  const changePage = (e, newPage) => {
    setPage(newPage);
  };

  const changeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = items.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);

  };


  // const pinNumber = async (id) => {
  //   try {
  //     setLoading(true)
  //     const data = {
  //       id : id
  //     }
  //   const response = await axios.post("http://localhost:8000/portals/savePin/" , data)
  //   console.log(response.data)
  //   window.location.reload()
  //   setLoading(false)
  
  //   }
  //   catch(error) {
  //       console.log(error)
  //   }
 
  // }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const generatePin = () => {
    selected.map(pin => {
      // console.log(uuidv4().substring(0, 5))
      const obj = {
        id: uuidv4(),
        pin: uuidv4().substring(0, 5)
      }
      console.log(obj)
    })
  }
    

  return (
  <Box component='div'>
      <Container style={{ margin: '10rem auto'}}>
        <div style={{ margin: '0 auto'}}>
            <TextField 
            id="outlined-basic" 
            label="Search..." 
            variant="outlined" 
            size='small'
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonSearchIcon color='primary' />
                  </InputAdornment>
                ),
              }} 
            onChange={(e) => setQ(e.target.value)}
            value={q} 
            />
        </div>
      <TableToolbar numSelected={selected.length} generatePin={generatePin} />
      <TableContainer component={Paper} aria-label="custom pagination table">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <CheckBoxHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={items.length}
            />
            <StyledTableCell style={{ textAlign: 'center'}}>Name</StyledTableCell>
            <StyledTableCell align="right" style={{ textAlign: 'center'}}>Invoice Number</StyledTableCell>
            <StyledTableCell align="right" style={{ textAlign: 'center'}}>Receipt Number</StyledTableCell>
            <StyledTableCell align="right" style={{ textAlign: 'center'}}>Date</StyledTableCell>
            <StyledTableCell align="right" style={{ textAlign: 'center'}}>PIN</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
          ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : items)
          .filter(item => {
            if(q === ''){
              return item
            } else if(item.name.toLowerCase().includes(q.toLowerCase()) || item.invoice.toLowerCase().includes(q.toLowerCase()) ) {
              return item
            } else {
              return null
            }
          })
          .map((single, i) => {
            const labelId = `enhanced-table-checkbox-${i}`
               const isItemSelected = isSelected(single.name);
                return (
                    <StyledTableRow 
                    key={i}  
                    // hover
                    onClick={e => handleClick(single.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={single.name}
                    selected={isItemSelected}
                    >
                    <StyledTableCell  padding='checkbox'>
                    <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                    />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" id={labelId} style={{ textAlign: 'center'}}>
                    {single.name}
                    </StyledTableCell>
                    <StyledTableCell align="right" style={{ textAlign: 'center'}}>{single.invoice}</StyledTableCell>
                    <StyledTableCell align="right" style={{ textAlign: 'center'}}>{single.receipt}</StyledTableCell>
                    <StyledTableCell align="right" style={{ textAlign: 'center'}}>{single.date}</StyledTableCell>
                    {/* <StyledTableCell align="right" style={{ textAlign: 'center'}}>{moment(single.created_at).format('DD/MM/YYYY')}</StyledTableCell> */}
                    <StyledTableCell align="right" style={{ textAlign: 'center'}}>{single.pinum}</StyledTableCell>
                  </StyledTableRow>
                )
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
        </TableBody>
        <TableFooter>
          <TableRow>
          <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={changePage}
          onRowsPerPageChange={changeRowsPerPage}
          ActionsComponent={TablePaginationAction} 
          />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
      </Container>
  </Box>
  );
};

export default Admin;
