import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Typography, Grid, Button, Link, Container} from '@material-ui/core'

const Index = () => {
    return (
        <>
            <div className='App'>
                <Typography variant="h1" component="h2" gutterBottom color='primary'>Administrador de la app</Typography>
                <img src={logo} className="App-logo" alt="logo" />
                <Container maxWidth='sm' style={{marginTop: '5vh'}}>
                    <Grid container spacing={3} justify='space-evenly'>
                        <Grid item>
                            <Link href='/'>
                                <Button variant="contained" color="primary" component="span">Home</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='/login'>
                                <Button variant="contained" color="primary" component="span">Login</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='/user'>
                                <Button variant="contained" color="primary" component="span">User</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='/play'>
                                <Button variant="contained" color="primary" component="span">Play</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Index;
