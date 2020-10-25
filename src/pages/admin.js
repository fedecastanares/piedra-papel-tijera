import React from 'react';
import logo from '../logo.svg';
import {Typography, Grid, Button, Link, Container} from '@material-ui/core'

const Index = () => {
    return (
        <>
        <Typography variant="h1" component="h2" gutterBottom color='primary' align='center'>Administrador de la app</Typography>
                <img src={logo} style={{display: 'block', margin: 'auto', height: '45vh'}} alt="logo" />
        <Container maxWidth='sm' style={{marginTop: '5vh'}}>
            <Grid container spacing={3} justify='space-evenly'>
                <Grid item>
                    <Link href='/' underline='none'>
                        <Button variant="contained" color="primary" component="span">Home</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='/login' underline='none'>
                        <Button variant="contained" color="primary" component="span">Login</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='/user' underline='none'>
                        <Button variant="contained" color="primary" component="span">User</Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href='/play' underline='none'>
                        <Button variant="contained" color="primary" component="span">Play</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default Index;
