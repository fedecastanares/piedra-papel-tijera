import React, {useContext} from 'react';
import {DataContext} from '../../../context/dataContext';
import {Button, Grid} from '@material-ui/core';
import UserPlaysImg from '../resultsComponents/UserPlaysImg';


const PlayerPlays = ({playerPlays, whoIam}) => {
    const {userPlays, activeGame, games , setUserPlays} = useContext(DataContext);

    const handleClick = userPlay => {
        setUserPlays(userPlay)
    }

    if (activeGame.game.hostPlay !== undefined){
        return (
            <>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                <Grid container justify='center'>
                    <div className='animate__animated animate__fadeInUp'>
                        <UserPlaysImg
                        userPlays={games.id === activeGame.game.idHost ? activeGame.game.hostPlay : activeGame.game.rivalPlay}  />
                    </div>
                </Grid>
               </Grid>
                <Grid item xs={12}>
                    <Grid container >
                        <Button fullWidth variant="contained" color="primary" disabled>
                            {games.id === activeGame.game.idHost ? activeGame.game.hostPlay : activeGame.game.rivalPlay} 
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            </>
        ) }
    else { 
        if (playerPlays !== undefined){
            return ( <Button fullWidth variant="contained" color="primary" disabled>
                        {whoIam === 'rival' ? activeGame.game.hostPlay : activeGame.game.rivalPlay}   
                    </Button>
                    ) 
        } else {
            return(
                <>
                <Grid container justify='center'>
                    <Grid item>
                        <Grid container justify='center'>
                            <div className='animate__animated animate__fadeInUp'>
                                <UserPlaysImg userPlays={userPlays}/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button fullWidth variant={userPlays === "piedra" ? "contained" : "outlined"} color="primary" onClick={() => handleClick('piedra')}>Piedra</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button fullWidth variant={userPlays === "papel" ? "contained" : "outlined"} color="primary" onClick={() => handleClick('papel')}>Papel</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button fullWidth variant={userPlays === "tijera" ? "contained" : "outlined"} color="primary" onClick={() => handleClick('tijera')}>Tijera</Button>
                    </Grid>
                </Grid>
                </>
            ) 
        }}
}
export default PlayerPlays;