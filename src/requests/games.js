import {axiosApiInstance} from './instance';

export const getGamesRequest = async () => {
    try {
        const response = await axiosApiInstance.get(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/games`)
        const allGames = response.data.mygames.concat(response.data.pendingGames);
        return ({
            games: allGames.sort((a,b) => a.updatedAt > b.updatedAt), 
            id: response.data.playerId,
            lastResponse: response
        });
    } catch (error) {
        
    }
}

export const responseGame = async (id, rivalPlay) => {
    const data = {
        "rivalPlay": rivalPlay,
        "status" : "completed",
    }
    try {
        const response = await axiosApiInstance.post(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/games/${id}`, data
        )
        return response.data
    } catch (error) {
        console.log(error);
    }
}