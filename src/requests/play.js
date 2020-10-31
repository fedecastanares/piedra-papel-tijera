import {axiosApiInstance} from './instance';


export const playersRequest = async string => {
    const playeresReq = async string => {
        const data = JSON.stringify({});
            try {
                const response = await axiosApiInstance.get(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}/players`)
                return (response.data.players);
            } catch (error) {
                console.log(error);
            }
    }

    const players = await playeresReq();
    return ({
        players: players,
        async selectRivalById(id, play, nameRival, nameHost) {
            const createGameById = async id => {
                const data = {
                    "idRival": id,
                    "hostPlay": play,
                    "status" : "pending",
                    "nameRival": nameRival,
                    "nameHost" : nameHost,
                };
                try {
                    const response = await axiosApiInstance.post(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}/games`, data
                    )
                    return(response.data.gameId);
                } catch (error) {
                   console.log(error); 
                }
            }
            const gameCreatedById = await createGameById(id);
            return gameCreatedById
        }
    });
    
}