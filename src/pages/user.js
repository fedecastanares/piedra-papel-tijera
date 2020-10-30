import React, {useContext} from 'react';
import SearchRivals from '../components/searchRivals';
import ListGames from '../components/listGames';
import LogOut from '../components/logout';
import Game from './game';
import {DataContext} from '../context/dataContext';
import {Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    }
}))

const PlayPage = () => {
    const classes = useStyles();
    const {games, activeGame} = useContext(DataContext);

    if(!activeGame) {
        return ( 
            <>
            <Container className={classes.root}>
                <Grid container justify='flex-end' style={{marginTop: '5vh'}}>
                    <LogOut/>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <SearchRivals/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ListGames text='Pendientes' listGames={games && games.games.filter(game => game.status === 'pending')} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ListGames text='Historial' listGames={games && games.games.filter(game => game.status !== 'pending')} />
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