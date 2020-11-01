import React from 'react';
import {Button, Grid} from '@material-ui/core';
import RivalPlaysImg from './RivalPlaysImg';

const RivalPlays = ({activeGame, whoIam}) => {
    if (activeGame.game.rivalPlay !== undefined){
        return (
            <>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                    <Grid container >
                        <Button fullWidth variant="contained" color="primary" disabled> 
                            {whoIam === 'rival' ? activeGame.game.hostPlay : activeGame.game.rivalPlay} 
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify='center'>
                        <div className='animate__animated animate__fadeInDown'>
                            <RivalPlaysImg
                                rivalPlay={whoIam === 'rival' ? activeGame.game.hostPlay : activeGame.game.rivalPlay} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            </>
        ) 
    } else {
        return null
    }
} 
export default RivalPlays;