import React, { useState } from 'react';
import { 
    Box, 
    Button, 
    Card, 
    Container, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField, 
    Typography 
} from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const BeceFilled = () => {

    const [led, setLed] = useState('')
    const handleLed = e => setLed(e.target.value)


  return (
  <Box component='div' className='bece'>
      <Container>
          <Card className='bece-card' elevation={5}>
                  <Box component='form' noValidate autoComplete='off' className='bece-form-left'>
                    <Typography variant='h5' align='center' sx={{ paddingTop: '3rem', fontWeight: 'bold'}}>
                          Requisition Form
                    </Typography>
                      <Container sx={{ mt: 5}}>
                      <div>
                      <TextField 
                      id="standard-basic" 
                      label="Name of School" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                      </div>
                      <div>
                      <TextField 
                      id="standard-basic" 
                      label="School L.E.D ID" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                      </div>
                      <div>
                    <FormControl variant="standard" fullWidth className='bece-form-field'>
                    <InputLabel id="demo-simple-select-standard-label">L.E.D</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={led}
                        onChange={handleLed}
                        label="L.E.D"
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={'L.E.D 1'}> L.E.D 1 </MenuItem>
                        <MenuItem value={'L.E.D 2'}> L.E.D 2 </MenuItem>
                        <MenuItem value={'L.E.D 3'}> L.E.D 3 </MenuItem>
                        <MenuItem value={'L.E.D 4'}> L.E.D 4 </MenuItem>
                        <MenuItem value={'L.E.D 5'}> L.E.D 5 </MenuItem>    
                    </Select>
                </FormControl>
                </div>
                <Typography variant='body1' sx={{ mt: 5, fontWeight: 'bold'}}>Contact Details:</Typography>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Name" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Email" 
                      type='email'
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Phone Number" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Number of Candidates" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Invoice ID" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      />
                </div>
                <div style={{ marginTop: '3rem'}}>
                    <Button color='success' 
                    variant='contained' 
                    sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                    >
                        Proceed to payment
                    </Button>
                </div>
                      </Container>
                  </Box>
                  <Box compnent='div' className='bece-form-right'>
                    <Typography variant='h4' align='center' sx={{ color: 'white', paddingTop: '3rem', fontWeight: 'bold'}}>
                          B.E.C.E
                    </Typography>
                    <Typography variant='body2' align='center' sx={{ color: 'white', pt: 1}}>
                        Fill the form to request for Central Billing System Invoice ID
                    </Typography>
                    <div style={{ marginTop: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AirplanemodeActiveIcon className='plane' />
                    </div>
                  </Box>
          </Card>
      </Container>
  </Box>
  );
};

export default BeceFilled;
