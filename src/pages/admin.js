import React , {useContext} from 'react';
import logo from '../logo.svg';
import {Typography, Grid, Button, Link, Container} from '@material-ui/core'
import {getUser, isUserAuthenticated, deauthenticateUser} from '../requests/auth';
import { green, red } from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import {DataContext} from '../context/dataContext'


const useStyles = makeStyles((theme) => ({
    tittle: {
        fontSize: '5rem !important',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.6rem !important',
        }
    },
    img: {
        display: 'block', 
        margin: 'auto', 
        height: '45vh',
        [theme.breakpoints.down('lg')]: {
            height: '25vh'
        }
    }
  }));

const Index = (props) => {
    const classes = useStyles();
    const {setauth} = useContext(DataContext)
    const handleClick = () => {
        deauthenticateUser();
        props.props.history.push('/login');
        setauth(false);
    }
    return (
        <>
        <Typography variant="h1" component="h2" gutterBottom color='primary' align='center' className={classes.tittle}>Administrador de la app</Typography>
                <img src={logo} className={classes.img} alt="logo" />
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
            <Grid container style={{marginTop: 50}} justify='center' spacing={3}>
                <Grid container>
                    <Button variant="contained" color="primary" component="span" fullWidth onClick={() => handleClick()}>Desloguear</Button>
                </Grid>
                <Grid item>
                    <Typography variant="body1" gutterBottom color='primary' align='center'>{isUserAuthenticated()? getUser(): "Sin informacion"}</Typography>
                </Grid>
                <Grid item>
                    <CheckCircleOutlineIcon style={isUserAuthenticated() ? { color: green[500] } : { color: red[500] }}  /></Grid>
                </Grid>
        </Container>
        </>
    );
}

export default Index;
