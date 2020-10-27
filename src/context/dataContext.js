import React, {createContext, useState, useEffect} from 'react';
import { playersRequest } from '../requests/play';
import { getGamesRequest } from '../requests/games'
import {isUserAuthenticated} from '../requests/auth'

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const [auth, setauth] = useState(null);
    const [rivals, setRivals] = useState(false);
    const [games, setgames] = useState(false)

    useEffect(() => {
       if(isUserAuthenticated()) {
           setauth(true)
       } else {
           setauth(false)
       }
    }, []);


    // Pasar estas funciones a sus componentes pq recarga al cambiar de path
    useEffect(() => {
        const getPlayers = async string => {
            if (isUserAuthenticated()) {
                const players = await playersRequest();
                setRivals(players); 
                const games = await getGamesRequest();
                setgames(games);
            } else {
                setRivals(false);
                setgames(false);
            }    
        }
        getPlayers();
    }, [auth]);

    // Rivales, seleccionar rival

    return(
        <DataContext.Provider
            value={{
                auth,
                rivals,
                games,
                setauth,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;