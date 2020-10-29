import React, { useContext, useState } from 'react';
import {DataContext} from '../context/dataContext'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, Typography, Button} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    container: {
        height: 'calc(100vh - 36px)',
    }
}));

const Game = () => {
    const classes = useStyles();
    const [userPlays, setUserPlays] = useState('')
    const {activeGame, games, rivals, setActiveGame} = useContext(DataContext);
    const whoIs = activeGame.game.idHost === games.id ? 'idHost' : 'idRival';
    const playerPlays = whoIs === 'idHost' ? activeGame.game.hostPlay : activeGame.game.rivalPlay;
    const conditionalButton = (activeGame.game.status === "newGame" || !(activeGame.game.status === 'pending' && whoIs === 'idHost')) && userPlays=='' ? true : false;

    const handlePlays = () => {
        if(activeGame.game.status === "newGame") {
            rivals.selectRivalById(activeGame.game.idRival);
        }
    }
    const Status = () => {
        switch(activeGame.game.status) {
            case 'pending':
                if (whoIs === 'idHost'){
                    return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Esperando que juegue el oponente</Typography>} 
                else{
                    return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >El rival esta esperando que juegues</Typography>}
            case 'finish':
                return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Partida completada</Typography> 
            case 'rejected':
                return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >El jugador no acepto la solicitud</Typography>
            case 'newGame':
                return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Nueva partida</Typography>      
            default:
                return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Ocurrio un error leyendo el status</Typography> 
        }
        
    }
    

    const Play = () => {
        if (playerPlays != undefined){
            return (<Button fullWidth variant="contained" color="primary" disabled> {playerPlays} </Button>) 
        } else {
            return(
                <>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button fullWidth variant={userPlays == "piedra" ? "contained" : "outlined"} color="primary" onClick={() => setUserPlays("piedra")}>Piedra</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button fullWidth variant={userPlays == "papel" ? "contained" : "outlined"} color="primary" onClick={() => setUserPlays("papel")}>Papel</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button fullWidth variant={userPlays == "tijera" ? "contained" : "outlined"} color="primary" onClick={() => setUserPlays("tijera")}>Tijera</Button>
                    </Grid>
                </Grid>
                </>
            ) 
        }
    }

    return ( 
        <>
            <Container className={classes.container}>
                <Grid container spacing={3} style={{height: '88%'}}>
                    <Grid item xs={12}>
                        <Status/>
                    </Grid>
                    <Grid item xs={12}>
                        <Play/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => setActiveGame(null)}> {activeGame.game.status === "newGame" ? "Cancelar" : "Atras" } </Button>
                    </Grid> 
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" color="primary" disabled={conditionalButton} onClick={handlePlays}>{conditionalButton ? "Esperando" : `Jugar  ${userPlays}`} </Button>
                    </Grid> 
                </Grid>
            </Container>
        </>
     );
}
 
export default Game;