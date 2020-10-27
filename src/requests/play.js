import {axiosApiInstance} from './instance';



export const playersRequest = async string => {
    const response = async string => {
        var data = JSON.stringify({});
            try {
                const response = await axiosApiInstance.get(`http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/players`)
                return (response.data.players);
            } catch (error) {
                console.log(error);
            }
    }

    const players = await response();
    return ({
        players: players,
        selectRivalById(id) {
            console.log('Jugar contra: ' + id);
        }
    });
    
}