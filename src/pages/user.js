import React, {useContext, useEffect} from 'react';
import SearchRivals from '../components/user/searchRivals';
import ListGames from '../components/user/listGames';
import MyAccountSection from '../components/user/header';
import Game from './game';
import {DataContext} from '../context/dataContext';
import {Container, Grid, Button, Typography, Snackbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import HistoryRank from '../components/user/historyRank'
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh'
    },
    lists: {
        marginTop: '5vh'
    },
    button: {
        backgroundColor: theme.palette.fontColor,
        color: theme.palette.background,
        '&:hover' : {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background
        }
    },
    aLittleAir: {
        marginTop: '2.5vh',
        marginBotton: '2.5vh',
    }
}))

const PlayPage = () => {
    const classes = useStyles();
    const {games, activeGame, getData, loading, open, setOpen, setActiveGame} = useContext(DataContext);

    useEffect(() =>{
        setActiveGame(null);
    });

    const handleClick = () => {
        getData()
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    const Snack = () => {
        return (
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled">
                    Partida creada
                </Alert>
            </Snackbar>
        )
    }

    if(!activeGame) {
        return ( 
            <>
            <Container className={classes.root}>
                <Grid container className={classes.aLittleAir} justify='space-between' alignItems='center'>
                    <MyAccountSection/>
                </Grid>
                <Grid container className={classes.aLittleAir} >
                    <Button 
                        fullWidth 
                        variant="contained" 
                        className={classes.button}
                        onClick={handleClick}
                        >
                            <Grid container spacing={2} justify='center' alignItems='center'>
                                <Grid item>
                                    <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Actualizar</Typography>
                                </Grid>
                                <Grid item>
                                    <AutorenewIcon className={loading ? 'animate__animated animate__rotateIn animate__repeat-20' : ''} />
                                </Grid>
                            </Grid>
                        </Button>
                </Grid>
                <Grid container spacing={3} className={classes.lists}>
                    <Grid item xs={12} md={4}>
                        <SearchRivals/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ListGames text='Pendientes' list={games  && games.games.filter(game => game.status === 'pending')} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ListGames text='Historial' list={games && games.games.filter(game => game.status !== 'pending')} >
                            <HistoryRank list={games && games.games.filter(game => game.status !== 'pending')} />
                        </ListGames>
                    </Grid>
                </Grid>
                <Snack/> 
            </Container>
            </>
         );
    } else if (activeGame){
        return <Game/>
    }

    
}
 
export default PlayPage;