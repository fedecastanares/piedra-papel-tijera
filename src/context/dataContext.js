import React, {createContext, useState, useEffect} from 'react';
import { playersRequest } from '../requests/play';
import {isUserAuthenticated} from '../requests/auth'

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const [auth, setauth] = useState();
    const [rivals, setRivals] = useState(false);

    useEffect(() => {
       if(isUserAuthenticated()) {
           setauth(true)
       } else {
           setauth(false)
       }
    }, []);

    useEffect(() => {
        const getPlayers = async string => {
            if (isUserAuthenticated()) {
                const players = await playersRequest();
                setRivals(players); 
            } else {
                setRivals(false);
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
                setauth,
                setRivals
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;