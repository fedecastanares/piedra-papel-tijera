import React, {createContext, useState, useEffect} from 'react';
import { playersRequest } from '../requests/play';
import { getGamesRequest } from '../requests/games';
import {isUserAuthenticated} from '../requests/auth'

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const [auth, setauth] = useState(undefined);
    const [rivals, setRivals] = useState(false);
    const [games, setgames] = useState(false);
    const [activeGame, setActiveGame] = useState(null);
    const [loading, setloading] = useState()

    const getData = async () => {
        if(isUserAuthenticated()){
            setloading(true);
            const players = await playersRequest();
            setRivals(players); 
            const games = await getGamesRequest();
            setgames(games);
            setloading(false);
        }
    }


    useEffect(() => {
        const getPlayers = async string => {
            getData();
        }
        getPlayers();
    },[auth])


    return(
        <DataContext.Provider
            value={{
                auth,
                rivals,
                games,
                activeGame,
                loading,
                setauth,
                setRivals,
                setgames,
                setActiveGame,
                getData
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;