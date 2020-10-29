import React, {useContext, useEffect} from 'react';
import SearchRivals from '../components/searchRivals';
import MyGames from '../components/myGames';
import Game from './game';
import {DataContext} from '../context/dataContext';


import {Container, Grid} from '@material-ui/core'

const PlayPage = () => {
    
    const {activeGame} = useContext(DataContext);

    useEffect(() => {


    }, [activeGame])

    if(!activeGame) {
        return ( 
            <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <SearchRivals/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MyGames/>
                    </Grid>
                </Grid>
            </Container>
            </>
         );
    } else {
        return <Game/>
    }

    
}
 
export default PlayPage;