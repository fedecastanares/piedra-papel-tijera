import React, {useContext} from 'react';
import SearchRivals from '../components/searchRivals';
import ListGames from '../components/listGames';
import Header from '../components/header';
import Game from './game';
import {DataContext} from '../context/dataContext';
import {Container, Grid, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AutorenewIcon from '@material-ui/icons/Autorenew';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
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
    const {games, activeGame, getData, loading} = useContext(DataContext);

    const handleClick = () => {
        getData()
    }

    if(!activeGame) {
        return ( 
            <>
            <Container className={classes.root}>
                <Grid container className={classes.aLittleAir} justify='space-between' alignItems='center'>
                    <Header/>
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
                        <ListGames text='Historial' list={games && games.games.filter(game => game.status !== 'pending')} />
                    </Grid>
                </Grid>
            </Container>
            </>
         );
    } else if (activeGame){
        return <Game/>
    }

    
}
 
export default PlayPage;