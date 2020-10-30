import React from 'react';
import {Button, Grid} from '@material-ui/core';

const PlayerPlays = ({userPlays, setUserPlays, playerPlays}) => {
    if (playerPlays !== undefined){
        return (<Button fullWidth variant="contained" color="primary" disabled> {playerPlays} </Button>) 
    } else {
        return(
            <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Button fullWidth variant={userPlays === "piedra" ? "contained" : "outlined"} color="primary" onClick={() => setUserPlays("piedra")}>Piedra</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant={userPlays === "papel" ? "contained" : "outlined"} color="primary" onClick={() => setUserPlays("papel")}>Papel</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant={userPlays === "tijera" ? "contained" : "outlined"} color="primary" onClick={() => setUserPlays("tijera")}>Tijera</Button>
                </Grid>
            </Grid>
            </>
        ) 
    }
}
export default PlayerPlays;