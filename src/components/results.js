import React, {useContext} from 'react';
import {Button, Grid} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {DataContext} from '../context/dataContext';
import { makeStyles } from '@material-ui/core/styles';
import piedra from '../imgs/piedra.png'
import papel from '../imgs/papel.png'
import tijera from '../imgs/tijera.png'

const useStyles = makeStyles((theme) => ({
    img: {
        height: '30vh',
        width: 'auto'
    }
}));

const Results = ({userPlays, setUserPlays, playerPlays}) => {
    const classes = useStyles();
    const {activeGame, games} = useContext(DataContext);
    const whoIam = games.id == activeGame.game.idHost ? "host" : 'rival';

    const handleClick = userPlay => {
        setUserPlays(userPlay)
        UserPlaysImg(userPlays)
    }

    const UserPlaysImg = () => {
        switch(userPlays) {
            case 'piedra':
                return <img className={classes.img} src={piedra} alt={`Jugo ${userPlays}`} />
            case 'papel':
                return <img className={classes.img} src={papel} alt={`Jugo ${userPlays}`} />
            case 'tijera':
                return <img className={classes.img} src={tijera} alt={`Jugo ${userPlays}`} />
            default:
                return <div className={classes.img}></div>
        }
    }

    const PlayerPlays = ({userPlays, playerPlays}) => {
        if (activeGame.game.hostPlay !== undefined){
            return (
                <Button fullWidth variant="contained" color="primary" disabled> 
                    {games.id === activeGame.game.idHost ? activeGame.game.hostPlay : activeGame.game.rivalPlay} 
                </Button>
            ) }
        else { 
            if (playerPlays !== undefined){
                return ( <Button fullWidth variant="contained" color="primary" disabled>
                            {whoIam === 'rival' ? activeGame.game.hostPlay : activeGame.game.rivalPlay}   
                        </Button>) 
            } else {
                return(
                    <>
                    <Grid container justify='center'>
                        <Grid item>
                            <div className='animate__animated animate__fadeInUp'>
                                <UserPlaysImg/>
                            </div>
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

    const RivalPlays = () => {
        if (activeGame.game.rivalPlay !== undefined){
            return (
            <Button fullWidth variant="contained" color="primary" disabled> 
                {whoIam === 'rival' ? activeGame.game.hostPlay : activeGame.game.rivalPlay} 
            </Button>
            ) 
        } else {
            return null
        }
    }

    const AlertResult = () => {
        if (activeGame.game.status === 'completed'){
            const alertPropierties = () => {
                if (activeGame.game.idWin === 'tie') {
                    return {severity: "warning", text: "Emapate"}
                } else if (games.id == activeGame.game.idWin) {
                    return {severity: "success", text: "Ganaste"}
                } else {
                    return {severity: "error", text: "Perdiste"}
                }
                }
            const alertProps = alertPropierties();
            return (
                <Alert variant="filled" severity={alertProps.severity}>
                    {alertProps.text}
                </Alert>
                )
        } else {
            return null
        }
    }

    return(
        <>
           <Grid container spacing={3}>
               <Grid item xs={12}>
                <RivalPlays/>
               </Grid>
               <Grid item xs={12}>
                <AlertResult/>
               </Grid>
               <Grid item xs={12}>
                <PlayerPlays 
                    userPlays={userPlays} 
                    setUserPlays={setUserPlays} 
                    playerPlays={playerPlays}/>
               </Grid>
           </Grid>
        </>
    )

}
export default Results;