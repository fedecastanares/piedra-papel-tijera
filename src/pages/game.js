import React, { useContext, useState } from 'react';
import {DataContext} from '../context/dataContext'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid,  Button} from '@material-ui/core'
import Status from '../components/status';
import PlayerPlays from '../components/playerPlays';
import {getUser} from '../requests/auth'


const useStyles = makeStyles((theme) => ({
    container: {
        height: 'calc(100vh - 36px)',
    }
}));

const Game = () => {
    const classes = useStyles();
    const [userPlays, setUserPlays] = useState('');
    const {activeGame, games, rivals, setActiveGame, setgames} = useContext(DataContext);
    const whoIs = activeGame.game.idHost === games.id ? 'idHost' : 'idRival';
    const playerPlays = whoIs === 'idHost' ? activeGame.game.hostPlay : activeGame.game.rivalPlay;


    const conditionalButtonEvaluation = () => {
        switch(activeGame.game.status){
            case 'pending':
                 if (whoIs === 'idHost'){
                     console.log('1')
                    return true
                } else if( whoIs === 'idRival' && userPlays === ''){
                    console.log('2')
                    return true
                } else {
                    console.log('3')
                    console.log(userPlays === '')
                    console.log(whoIs === 'idRival')
                    return false
                }
            case 'newGame': 
                return userPlays === ''
            default:
                console.log('entro en default')
        }
    }
    const conditionalButton = conditionalButtonEvaluation();
    

    const handlePlays = () => {
        if(activeGame.game.status === "newGame") {
            const nameUser = getUser();
            const newGame = async () =>{
                const id = await rivals.selectRivalById(activeGame.game.idRival, userPlays, activeGame.game.nameRival, nameUser);
                setgames({
                    games:
                    [{
                        _id : id, 
                        idHost: games.games.id, 
                        idRival: activeGame.game.idRival, 
                        hostPlay: userPlays, 
                        status: "pending",
                        nameRival: activeGame.game.nameRival
                    }].concat(...games.games)
                    
                });
                setActiveGame(null);
            }
            newGame();
        }
    }

    return ( 
        <>
            <Container className={classes.container}>
                <Grid container spacing={3} style={{height: '88%'}}>
                    <Grid item xs={12}>
                        <Status whoIs={whoIs} />
                    </Grid>
                    <Grid item xs={12}>
                        <PlayerPlays 
                        userPlays={userPlays} 
                        setUserPlays={setUserPlays} 
                        playerPlays={playerPlays}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button 
                            fullWidth 
                            variant="outlined" 
                            color="secondary" 
                            onClick={() => setActiveGame(null)}> {activeGame.game.status === "newGame" ? "Cancelar" : "Atras" } 
                        </Button>
                    </Grid> 
                    <Grid item xs={12}>
                        <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            disabled={conditionalButton} 
                            onClick={handlePlays}>{conditionalButton ? "Esperando" : `Jugar  ${userPlays}`} 
                        </Button>
                    </Grid> 
                </Grid>
            </Container>
        </>
     );
}
 
export default Game;