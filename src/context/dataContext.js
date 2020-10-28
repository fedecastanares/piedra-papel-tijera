import React, {createContext, useState, useEffect} from 'react';
import { playersRequest } from '../requests/play';
import { getGamesRequest } from '../requests/games';
import {isUserAuthenticated} from '../requests/auth'

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const [auth, setauth] = useState(undefined);
    const [rivals, setRivals] = useState(false);
    const [games, setgames] = useState(false)

    useEffect(() => {
        const getPlayers = async string => {
            if(isUserAuthenticated()){
                const players = await playersRequest();
                setRivals(players); 
                const games = await getGamesRequest();
                setgames(games);
            }
        }
        getPlayers();
    },[auth])


    return(
        <DataContext.Provider
            value={{
                auth,
                rivals,
                games,
                setauth,
                setRivals,
                setgames,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;