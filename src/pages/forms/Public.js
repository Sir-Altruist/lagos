import React, { useState } from 'react';
import {API} from '../backend';
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
import Footer from '../../Component/Footer';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import Logo from "../../images/logo.png"
import ProceedModal from "../../Component/ProceedModal"


const Bece = () => {

    const [curoff, setCuroff] = useState('')
    const [mda, setMda] = useState('')
    const [stfid, setStfid] = useState();
    const [addr, setAddr] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [noc, setNoc] = useState();
    const [combine, setCombine] = useState()
    const [test, setTest] = useState()

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleOnchange = (e) =>{
        var changes = e.target.name;
        // console.log(`My Value is ${changes}`);
        if (changes === "testcombine"){
            setCombine(e.target.value)
        }

        if (changes === "testtype"){
            setTest(e.target.value)
            console.log(`Number of school ${e.target.value}`)
        }

        if (changes === "noofcan"){
            setNoc(e.target.value);
            console.log(`My name is ${e.target.value}`)
        }

        if (changes ===  "curroff"){
            setCuroff(e.target.value)
        }

        if (changes === "mdas"){
            setMda(e.target.value);
            console.log(`MDA ${e.target.value}`)
        }

        if (changes === "staffid"){
            setStfid(e.target.value);
            console.log(`Staff Id ${e.target.value}`)
        }

        if (changes === "address"){
            setAddr(e.target.value);
            console.log(`Address ${e.target.value}`)
        }

        if (changes === "phonenum"){
            setPhone(e.target.value);
            console.log(`Phone ${e.target.value}`)
        }

        if (changes === "address"){
            setAddr(e.target.value);
            console.log(`Address ${e.target.value}`)
        }

        if (changes === "emailaddress"){
            setEmail(e.target.value);
            console.log(`Staff Id ${e.target.value}`)
        }

        if (changes === "numbofcand"){
            const red = /^[0-9\b]+$/;
            if(e.target.value === '' || red.test(e.target.value)){
                setNoc(e.target.value);
            }
            console.log(`Numb of Candidate ${e.target.value}`)
        }
    }

    const handleonclick = async (e) => {
        e.preventDefault()
        const uuid = uuidv4().substring(0,5)
        const uuidx = uuidv4().substring(0,5)
        console.log(`UUID: ${uuid}`)
        setOpen(true)
        const obj = {
            Name: noc,
            phone: phone,
            email: email,
            Address: addr,
            staffID:stfid,
            Mda: mda,
            StudentNumber : 20,
            currentOffice : curoff,
            ExamType : '3',
            RequestId: uuid,
            InvoiceNumber: uuidx,
        }
        console.log('Public:', obj)

        try {
            const resp = await axios.post(`${API}`, obj);
            if(resp.status === 201){
                // navigate("/cbspayment")
                localStorage.setItem('phone' , resp.data.phone)
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <Box component='div' className='bece'>
            <Container>
          <Card className='public-card' elevation={5}>
                  <Box component='form' noValidate autoComplete='off' className='bece-form-left'>
                    <Typography variant='h5' align='center' sx={{ paddingTop: '3rem', fontWeight: 'bold'}}>
                          Requisition Form
                    </Typography>
                      <Container sx={{ mt: 5}}>
                      <div>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Select Test Type</InputLabel>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={test}
                              name="testtype"
                              onChange={handleOnchange}
                              label="Select Test Type"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={'Compulsory'}>Compulsory</MenuItem>
                              <MenuItem value={'Combine'}>Combine</MenuItem>
                              <MenuItem value={'External Secretariat'}>External Secretariat</MenuItem>
                            </Select>
                          </FormControl>
                            {
                            test === 'Combine' && <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-filled-label">Combine</InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={combine}
                              name="testcombine"
                              onChange={handleOnchange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={'C.O 2'}>C.O 2</MenuItem>
                              <MenuItem value={'C.A'}>C.A</MenuItem>
                            </Select>
                          </FormControl> 
                          }
                      </div>
                      <div>
                      <TextField 
                      id="standard-basic" 
                      label="Name of Candidate" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={noc}
                      name="noofcan"
                      onChange={handleOnchange}
                      />
                      </div>
                      <div>
                      <TextField 
                      id="standard-basic" 
                      label="Current Office" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={curoff}
                      name="curroff"
                      onChange={handleOnchange}
                      />
                      </div>
                <Typography variant='body1' sx={{ mt: 5, fontWeight: 'bold'}}>Contact Details:</Typography>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="M.D.A" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={mda}
                      name="mdas"
                      onChange={handleOnchange}
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Staff ID" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={stfid}
                      name="staffid"
                      onChange={handleOnchange}
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Address" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={addr}
                      name="address"
                      onChange={handleOnchange}
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Email" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={email}
                      name="emailaddress"
                      onChange={handleOnchange}
                      />
                </div>
                <div>
                      <TextField 
                      id="standard-basic" 
                      label="Phone Number" 
                      variant="standard"
                      fullWidth
                      className='bece-form-field'
                      value={phone}
                      name="phonenum"
                      onChange={handleOnchange}
                      />
                </div>
                <div style={{ marginTop: '3rem', display: 'flex'}}>
                    <Button color='success' 
                    variant='contained' 
                    sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                    onClick={handleonclick}
                    >
                        Place Request
                    </Button>
                    <Button color='error' 
                    variant='contained' 
                    sx={{ textTransform: 'inherit', fontWeight: 'bold', marginLeft: '2rem'}}
                    type='submit'
                    >
                        <Link to='/' style={{ color: '#ffffff', textDecoration: 'none'}}>Go back</Link>
                    </Button>
                </div>
                      </Container>
                  </Box>
                  <Box compnent='div' className='public-form-right'>
                  <Typography 
                    variant='h4' 
                    align='center' 
                    sx={{ color: '#ffffff', paddingTop: '3rem', fontWeight: 'bold'}}
                    >
                         Lagos State Exam Board
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
                        <img src={Logo} alt='logo' />
                    </div>
                    <Typography variant='h4' align='center' sx={{ color: 'white', paddingTop: '3rem', fontWeight: 'bold'}}>
                          Public Service
                    </Typography>
                    <Typography variant='body2' align='center' sx={{ color: 'white', pt: 1}}>
                        Fill the form to request for the Official Central Billing System Invoice ID
                    </Typography>
                  </Box>
          </Card>
      </Container>
      <ProceedModal open={open} handleClose={handleClose} />
            </Box>
            <Footer />
        </div>
    );
};

export default Bece;
