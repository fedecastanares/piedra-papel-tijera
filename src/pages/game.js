import React, { useContext } from 'react';
import {DataContext} from '../context/dataContext'
import {getUser} from '../requests/auth'
import {responseGame} from '../requests/games';
import Status from '../components/game/status';
import Results from '../components/game/results';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid,  Button} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    container: {
        height: 'calc(100vh - 36px)',
    },
    bottonButtons: {
        marginTop: '7vh'
    }
}));



const Game = () => {
    const classes = useStyles();
    const {activeGame, games, rivals, userPlays, setActiveGame, setgames, setUserPlays, setOpen} = useContext(DataContext);
    const whoIs = activeGame.game.idHost === games.id ? 'idHost' : 'idRival';
    const playerPlays = whoIs === 'idHost' ? activeGame.game.hostPlay : activeGame.game.rivalPlay;


    const conditionalButtonEvaluation = () => {
        switch(activeGame.game.status){
            case 'pending':
                 if (whoIs === 'idHost'){
                    return true
                } else if( whoIs === 'idRival' && userPlays === ''){
                    return true
                } else {
                    return false
                }
            case 'newGame': 
                return userPlays === ''
            case 'completed': 
                return true
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
                setOpen(true);
            }
            newGame();
        } else if(activeGame.game.status === "pending") {
            const play = async () => {
                const response = await responseGame(activeGame.game._id, userPlays);
                const {game} = response;
                const updateGameIndex = games.games.findIndex(game => response.game._id  === game._id);
                const newArray = [...games.games];
                newArray.splice(updateGameIndex, 1, game);
                setgames({
                    games: newArray,
                    id: games.id
                });
                setActiveGame({game: game}) 
            }
            play();
        }
    }


    return ( 
        <>
            <Container className={classes.container}>
                <Grid container spacing={3} style={{height: '80%', marginTop: '2%'}}>
                    <Grid item xs={12}>
                        <Status whoIs={whoIs} />
                    </Grid>
                    <Grid item xs={12}>
                        <Results 
                        playerPlays={playerPlays}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.bottonButtons}>
                    <Grid item xs={12}>
                        <Button 
                            fullWidth 
                            variant="outlined" 
                            color="secondary" 
                            onClick={() => {
                                setActiveGame(null)
                                setUserPlays('')
                            }}
                            > {activeGame.game.status === "newGame" ? "Cancelar" : "Atras" } 
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            disabled={conditionalButton} 
                            onClick={handlePlays}>
                                {conditionalButton ? "Esperando" : `Jugar  ${userPlays}`} 
                        </Button>
                    </Grid> 
                </Grid>
            </Container>
        </>
     );
}
 
export default Game;