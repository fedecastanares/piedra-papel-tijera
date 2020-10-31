import React, {useContext} from 'react';
import { DataContext } from '../context/dataContext';
import {Typography} from '@material-ui/core';

const Status = ({whoIs}) => {
    const {activeGame} = useContext(DataContext)
    switch(activeGame.game.status) {
        case 'pending':
            if (whoIs === 'idHost'){
                return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Esperando que juegue el oponente</Typography>} 
            else{
                return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >El rival esta esperando que juegues</Typography>}
        case 'completed':
            return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Partida completada</Typography> 
        case 'rejected':
            return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >El jugador no acepto la solicitud</Typography>
        case 'newGame':
            return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Nueva partida</Typography>      
        default:
            return <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >Ocurrio un error leyendo el status</Typography> 
    }
    
}
export default Status;

