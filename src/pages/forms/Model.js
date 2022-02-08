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
import { v4 as uuidv4 } from 'uuid'
import Logo from '../../images/logo.png'
import ProceedModal from "../../Component/ProceedModal"

const Bece = () => {
    const [location, setLocation] = useState('')
    const [ledId, setLedId] = useState('')
    const [nos, setNos] = useState();
    const [addrs, setAddrs] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [twncty, setTwncty] = useState();
    const [str, setStr] = useState();
    const [mystate, setMystate] = useState();
    const [districts, setDistricts] = useState();

    
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);


    const handleOnchange = (e) =>{
        var changes = e.target.name;
        // console.log(`My Value is ${changes}`);
        if (changes === "nocand"){
            setNos(e.target.value);
        }
        
        if (changes === "candloca"){
            setLocation(e.target.value)
        }

        if (changes === "schoolledid"){
            const red = /^[0-9\b]+$/;
            if(e.target.value === '' || red.test(e.target.value)){
                setLedId(e.target.value);
            }
            console.log(`Number of school ${e.target.value}`)
        }

        if (changes === "contemail"){
            setEmail(e.target.value);
            console.log(`Email ${e.target.value}`)
        }

        if (changes === "contphone"){
            const red = /^[0-9\b]+$/;
            if(e.target.value === '' || red.test(e.target.value)){
                setPhone(e.target.value);
            }
            console.log(`Telephone ${e.target.value}`)
        }

        if (changes === "address"){
            setAddrs(e.target.value);
            console.log(`Telephone ${e.target.value}`)
        }

        if (changes === "street"){
            setStr(e.target.value);
            console.log(`Numb of Candidate ${e.target.value}`)
        }

        if (changes === "towncity"){
            setTwncty(e.target.value)
        }

        if (changes === "ngnstate"){
            setMystate(e.target.value)
        }

        if (changes === "schooldistricts"){
            setDistricts(e.target.value);
            console.log(`My name is ${e.target.value}`)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const uuid = uuidv4().substring(0,5)
        const uuidx = uuidv4().substring(0,5)
        console.log(`UUID: ${uuid}`)
        setOpen(true)
        const obj = {
            Name: nos,
            ExamType : '2',
            Location: location,
            LedNumber: ledId,
            email: email,
            phone: phone,
            Address: addrs,
            street: str,
            State: mystate,
            TownCity: twncty,
            LedDistrict: districts,
            RequestId: uuid,
            InvoiceNumber: uuidx
        }
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

  return (
      <div>
        <Box component='div' className='model'>
            <Container>
                <Card className='model-card' elevation={5}>
                        <Box component='form' noValidate autoComplete='off' className='bece-form-left'>
                            <Typography variant='h5' align='center' sx={{ paddingTop: '3rem', fontWeight: 'bold'}}>
                                Requisition Form
                            </Typography>
                            <Container sx={{ mt: 5}}>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="Name of Candidate" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={nos}
                                    name="nocand"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="Location" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={location}
                                    name="candloca"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="LED School ID" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={ledId}
                                    name="schoolledid"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <FormControl variant="standard" fullWidth className='bece-form-field'>
                                        <InputLabel id="demo-simple-select-standard-label">L.E.D</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={districts}
                                            name="schooldistricts"
                                            onChange={handleOnchange}
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
                                            <MenuItem value={'L.E.D 6'}> L.E.D 5 </MenuItem>    
                                        </Select>
                                    </FormControl>
                                </div>
                                <Typography variant='body1' sx={{ mt: 5, fontWeight: 'bold'}}>Contact Details:</Typography>
                                <Typography variant='body2' sx={{ pt: 2, fontWeight: 'bold'}}>Home Address:</Typography>
                                <div>
                                    <TextField 
                                        id="standard-basic" 
                                        label="Address No" 
                                        variant="standard"
                                        fullWidth
                                        className='bece-form-field'
                                        value={addrs}
                                        name="address"
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="Street" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={str}
                                    name="street"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="Town/City" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={twncty}
                                    name="towncity"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="State" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={mystate}
                                    name="ngnstate"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="Phone No" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={phone}
                                    name="contphone"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div>
                                    <TextField 
                                    id="standard-basic" 
                                    label="E-mail" 
                                    variant="standard"
                                    fullWidth
                                    className='bece-form-field'
                                    value={email}
                                    name="contemail"
                                    onChange={handleOnchange}
                                    />
                                </div>
                                <div style={{ marginTop: '3rem', display: 'flex'}}>
                                    <Button color='success' 
                                    variant='contained' 
                                    sx={{ textTransform: 'inherit', fontWeight: 'bold', marginRight: '2rem'}}
                                    onClick={handleClick}
                                    >
                                        Place Request
                                    </Button>
                                    <Button color='error' 
                                    variant='contained' 
                                    sx={{ textTransform: 'inherit', fontWeight: 'bold'}}
                                    type='submit'
                                    >
                                        <Link to='/' style={{ color: '#ffffff', textDecoration: 'none'}}>Go back</Link>
                                    </Button>
                                </div>
                            </Container>
                        </Box>
                        <Box compnent='div' className='model-form-right'>
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
                                Model College Entrance
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

export default Bece;
