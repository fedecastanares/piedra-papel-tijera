import axios from 'axios';

import {getToken, isUserAuthenticated} from './auth';

export const playersRequest = async string => {
    const response = async string => {
        if (isUserAuthenticated) {
        const token = getToken();
        var data = JSON.stringify({});
        try {
            var config = {
                method: 'get',
                url: `http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/players`,
                data: data,
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'}
                    };
            const response = await axios(config);
            return (response.data.players);
        } catch (error) {
            console.log(error);
        }
    } else { console.log('No existe token') }
    }

    const players = await response();
    return ({
        players: players,
        selectRivalById(id) {
            console.log('Jugar contra: ' + id);
        }
    });
    
}