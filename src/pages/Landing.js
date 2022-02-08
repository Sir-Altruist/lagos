import React from 'react';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const Landing = () => {
  return (
  <Box component='div' className='landing'>
      <Container>
      <Typography variant='h3' align='center' style={{ paddingTop: '5rem'}}>Lagos State Examinations Board</Typography>
      <Typography variant='h5' align='center' sx={{ pt: 2}}>Request for Exam Services</Typography>
        <Card className='landing-card' elevation={5}>
            <Container>
                <Grid container sx={{ margin: '5rem 0 2rem 0'}}>
                    <Grid item xs={12} md={6}>
                        <div style={{textAlign: 'center'}}>
                        <Button variant='contained' color='inherit' className='landing-btn'>
                            <Link to='/requisition/bece' className='landing-link'>
                            B.E.C.E
                            </Link>
                        </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{textAlign: 'center'}}>
                        <Button variant='contained' color='inherit' className='landing-btn'>
                            <Link to='/requisition/junior' className='landing-link'>
                            Junior Schools Placement 
                            </Link>
                        </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container sx={{ margin: '3rem 0'}}>
                    <Grid item xs={12} md={6}>
                        <div style={{textAlign: 'center'}}>
                        <Button variant='contained' color='inherit' className='landing-btn'>
                            <Link to='/requisition/model' className='landing-link'>
                            Model College Entrance
                            </Link>
                        </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{textAlign: 'center'}}>
                        <Button variant='contained' color='inherit' className='landing-btn'>
                            <Link to='/requisition/public' className='landing-link'>
                            Public Service
                            </Link>
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Card>
      </Container>
  </Box>
  );
};

export default Landing;
