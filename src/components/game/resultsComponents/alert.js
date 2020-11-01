import React from 'react';
import Alert from '@material-ui/lab/Alert';

const AlertResult = ({activeGame, games}) => {
    if (activeGame.game.status === 'completed'){
        const alertPropierties = () => {
            if (activeGame.game.idWin === 'tie') {
                return {severity: "warning", text: "Emapate"}
            } else if (games.id === activeGame.game.idWin) {
                return {severity: "success", text: "Ganaste"}
            } else {
                return {severity: "error", text: "Perdiste"}
            }
            }
        const alertProps = alertPropierties();
        return (
            <div className='animate__animated animate__fadeIn animate__delay-1s'>
                <Alert variant="filled" severity={alertProps.severity}>
                    {alertProps.text}
                </Alert>
            </div>
            )
    } else {
        return null
    }
}
export default AlertResult;