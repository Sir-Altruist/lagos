import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProceedModal({ open, handleClose }) {

    const id = uuidv4().substring(0, 5).toUpperCase()

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center'>
            Reference Id Generated Successfully
          </Typography>
          <Typography variant='h4' id="modal-modal-description" align='center' sx={{ my: 5, fontWeight: 'bold' }}>
              {id}
          </Typography>
          <div style={{
              textAlign: 'center',
              margin: '2rem 0'
          }}>
            <Button
            variant='contained'
            color='primary'
            style={{
                marginRight: '1rem',
                textTransform: 'inherit',
                fontWeight: 'bold'
            }}
            >
                <Link to='/cbspayment' style={{ color: '#ffffff', textDecoration: 'none'}}>Proceed</Link>
                  
            </Button>
              <Button 
              variant='contained' 
              color='error' 
              onClick={handleClose}
              style={{
                marginLeft: '1rem',
                textTransform: 'inherit',
                fontWeight: 'bold'
            }}
              
              >Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
