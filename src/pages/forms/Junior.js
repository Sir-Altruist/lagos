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
import axios from "axios";
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import { v4 as uuidv4 } from 'uuid'
import ProceedModal from "../../Component/ProceedModal"

const Junior = () => {

    const [school, setSchool] = useState('') 
    const [ledId, setLedId] = useState('') 
    const [led, setLed] = useState('') 
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [phone, setPhone] = useState('') 
    const [candidate, setCandidate] = useState('') 
    const [pin, setPin] = useState('')
    const [statuss, setStatuss] = useState(true)

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);



    const handleSchool = e => {
        setSchool(e.target.value)
    }
    const handleLedId = e => {
        const red = /^[0-9\b]+$/;
        if(e.target.value === '' || red.test(e.target.value)){
            setLedId(e.target.value)
        }
    }
    const handleLed = e => {
        setLed(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePhone = e => {
        const red = /^[0-9\b]+$/;
        if(e.target.value === '' || red.test(e.target.value)){
            setPhone(e.target.value)
        }
    }
    const handleCandidate = e => {
        const red = /^[0-9\b]+$/;
        if(e.target.value === '' || red.test(e.target.value)){
            setCandidate(e.target.value)
        }
    }

    const handlepin = (e) =>{
        const red = /^[0-9\b]+$/;
        let valleng = e.target.value.length;
        console.log(`length: ${valleng}`)
        if(e.target.value === '' || red.test(e.target.value)){
            setPin(e.target.value)
        }
        
        if(valleng === 5){
            axios.get(`http://localhost:5000/getvals`)
            .then(res => {
                setSchool(res.data.nameofsch);
                setLedId(res.data.schled);
                setLed(res.data.leds);
                setName(res.data.name);
                setEmail(res.data.email);
                setPhone(res.data.phonenos);
                setCandidate(res.data.noscandidate);
            })
        }
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const uuid = uuidv4().substring(0,5)
        const uuidx = uuidv4().substring(0,5)
        console.log(`UUID: ${uuid}`)
        const obj = {
            SchoolName: school,
            ExamType : 1,
            LedNumber: ledId,
            LedDistrict: led,
            Name: name,
            email: email,
            phone: phone,
            StudentNumber:candidate,
            RequestId: uuid,
            InvoiceNumber: uuidx
        }
            setOpen(true)
        console.log('school:', obj)

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

    const handleclickables = (e) =>{
        e.preventDefault();
        let temp = e.target.name;
        if(temp === "new"){
            setStatuss(true);
            setPin("");
        }

        if(temp === "update"){
            setStatuss(false);
        }
    }

  return (
      <div>
            <Box component='div' className='bece'>
                <Container>
                    <Card className='junior-card' elevation={5}>
                            <Box component='form' noValidate autoComplete='off' className='bece-form-left'>
                                <Typography variant='h5' align='center' sx={{ paddingTop: '3rem', fontWeight: 'bold'}}>
                                    Requisition Form
                                </Typography>
                                <div className="headbutton">
                                    <button id="newbutt11" name="new" onClick={handleclickables}>New</button>
                                    <button id="newbutt22" name="update" onClick={handleclickables}>Update</button>
                                </div>
                                <Container sx={{ mt: 5}}>
                                {statuss ? 
                                    <div>
                                        <div>
                                        <TextField 
                                            id="standard-basic" 
                                            label="Name of School" 
                                            variant="standard"
                                            fullWidth
                                            className='bece-form-field'
                                            onChange={handleSchool}
                                            value={school}
                                        />
                                        </div>
                                        <div>
                                        <TextField 
                                            id="standard-basic" 
                                            label="School L.E.D ID" 
                                            variant="standard"
                                            fullWidth
                                            className='bece-form-field'
                                            onChange={handleLedId}
                                            value={ledId}
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
                                            onChange={handleName}
                                            value={name}
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
                                            onChange={handleEmail}
                                            value={email}
                                        />
                                        </div>
                                        <div>
                                            <TextField 
                                            id="standard-basic" 
                                            label="Phone Number" 
                                            variant="standard"
                                            fullWidth
                                            className='bece-form-field'
                                            onChange={handlePhone}
                                            value={phone}
                                            />
                                        </div>
                                        <div>
                                            <TextField 
                                            id="standard-basic" 
                                            label="Number of Candidates" 
                                            variant="standard"
                                            fullWidth
                                            className='bece-form-field'
                                            onChange={handleCandidate}
                                            value={candidate}
                                            />
                                        </div>
                                        <div style={{ marginTop: '3rem'}}>
                                            
                                        {
                                        school === '' ||
                                            ledId === '' ||
                                            led === '' ||
                                            name === '' ||
                                            email === '' ||
                                            phone === '' ||
                                            candidate === '' ? <Button color='primary' 
                                            variant='contained' 
                                            sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                            onClick={handleClick}
                                            disabled={true}
                                            >
                                                Place Request
                                            </Button> : <Button color='primary' 
                                            variant='contained' 
                                            sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                            onClick={handleClick}
                
                                            >
                                                Place Request
                                            </Button>
                                            }

                                            <Button color='error' 
                                            variant='contained' 
                                            sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                            type='submit'
                                            >
                                                <Link to='/' style={{ color: '#ffffff', textDecoration: 'none'}}>Go back</Link>
                                            </Button>
                                        </div>
                                </div>:<div>
                                    <div>
                                        <TextField 
                                            id="standard-basic" 
                                            label="Pin" 
                                            variant="standard"
                                            fullWidth
                                            className='bece-form-field'
                                            onChange={handlepin}
                                            value={pin}
                                            name='name'
                                        />
                                    </div>
                                <div>
                                    <TextField 
                                        id="standard-basic" 
                                        label="Name of School" 
                                        variant="standard"
                                        fullWidth
                                        className='bece-form-field'
                                        onChange={handleSchool}
                                        value={school}
                                        disabled={true}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                        id="standard-basic" 
                                        label="School L.E.D ID" 
                                        variant="standard"
                                        fullWidth
                                        className='bece-form-field'
                                        onChange={handleLedId}
                                        value={ledId}
                                        disabled={true}
                                />
                                </div>
                                <div>
                                <TextField 
                                        id="standard-basic" 
                                        label="L.E.D" 
                                        variant="standard"
                                        fullWidth
                                        className='bece-form-field'
                                        onChange={handleLed}
                                        value={led}
                                        disabled={true}
                                />
                            </div>
                            <Typography variant='body1' sx={{ mt: 5, fontWeight: 'bold'}}>Contact Details:</Typography>
                            <div>
                                <TextField 
                                id="standard-basic" 
                                label="Name" 
                                variant="standard"
                                fullWidth
                                className='bece-form-field'
                                onChange={handleName}
                                value={name}
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
                                onChange={handleEmail}
                                value={email}
                                />
                            </div>
                            <div>
                                <TextField 
                                id="standard-basic" 
                                label="Phone Number" 
                                variant="standard"
                                fullWidth
                                className='bece-form-field'
                                onChange={handlePhone}
                                value={phone}
                                />
                            </div>
                            <div>
                                <TextField 
                                id="standard-basic" 
                                label="Number of Candidates" 
                                variant="standard"
                                fullWidth
                                className='bece-form-field'
                                onChange={handleCandidate}
                                value={candidate}
                                />
                            </div>
                            <div style={{ marginTop: '3rem'}}>
                            {
                                        school === '' ||
                                            ledId === '' ||
                                            led === '' ||
                                            name === '' ||
                                            email === '' ||
                                            phone === '' ||
                                            candidate === '' ? <Button color='primary' 
                                            variant='contained' 
                                            sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                            onClick={handleClick}
                                            disabled={true}
                                            >
                                                Place Request
                                            </Button> : <Button color='primary' 
                                            variant='contained' 
                                            sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                            onClick={handleClick}
                
                                            >
                                                Place Request
                                            </Button>
                                            }

                                <Button color='error' 
                                variant='contained' 
                                sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                type='submit'
                                >
                                    <Link to='/' style={{ color: '#ffffff', textDecoration: 'none'}}>Go back</Link>
                                </Button>
                            </div>
                            </div>
                            }
                                </Container>
                            </Box>
                            <Box compnent='div' className='junior-form-right'>
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
                            Junior Schools Placement
                        </Typography>
                        <Typography variant='body2' align='center' sx={{ color: 'white', padding: '.3rem 1rem'}}>
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

export default Junior;
