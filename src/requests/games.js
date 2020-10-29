import {axiosApiInstance} from './instance';

export const getGamesRequest = async () => {
    try {
        const response = await axiosApiInstance.get(`http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/games`)
        const allGames = response.data.mygames.concat(response.data.pendingGames);
        return ({
            games: allGames.sort((a,b) => a.updatedAt > b.updatedAt), 
            id: response.data.playerId,
        });
    } catch (error) {
        
    }
}