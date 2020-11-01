import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import {DataContext} from '../../context/dataContext';
import PlayerPlays from './resultsComponents/PlayerPlays';
import AlertResult from './resultsComponents/alert';
import RivalPlays from './resultsComponents/RivalPlays'


const Results = ({ playerPlays}) => {

    const {activeGame, games} = useContext(DataContext);
    const whoIam = games.id === activeGame.game.idHost ? "host" : 'rival';


    return(
        <>
           <Grid container spacing={3}>
               <Grid item xs={12}>
                <RivalPlays
                    activeGame={activeGame}
                    whoIam={whoIam}
                />
               </Grid>
               <Grid item xs={12}>
                <AlertResult
                    activeGame={activeGame}
                    games={games}
                />
               </Grid>
               <Grid item xs={12}>
                <PlayerPlays
                    playerPlays={playerPlays}
                    whoIam={whoIam}
                    />
               </Grid>
           </Grid>
        </>
    )

}
export default Results;