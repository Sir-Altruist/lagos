import React from 'react';
import { Box, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types'

const TablePaginationAction = ({ count, page, rowsPerPage, onPageChange }) => {

    const theme = useTheme()
    //First page action
    const firstPage = e => {
      onPageChange(e, 0)
    }
    //prev button action
    const backButton = e => {
      onPageChange(e, page - 1)
    }
    //next button action
    const nextButton = e => {
      onPageChange(e, page + 1)
    }
    //last page action
    const lastPage = e => {
      onPageChange(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
    }
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5}}>
        <IconButton
        onClick={firstPage}
        disabled={page === 0}
        aria-label="first page">
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
        onClick={backButton}
        disabled={page === 0}
        aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
        onClick={nextButton}
        disabled={page >= Math.ceil( count / rowsPerPage) - 1}
        aria-label="next page">
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
        onClick={lastPage}
        disabled={page >= Math.ceil( count / rowsPerPage) - 1}
        aria-label="last page">
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    )
  }

TablePaginationAction.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

export default TablePaginationAction;
