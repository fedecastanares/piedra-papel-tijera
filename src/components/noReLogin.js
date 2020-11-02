import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserAuthenticated } from '../requests/auth'

const NoReLogin = ({ component: Component, ...props  }) => {

    return ( 
        <Route { ...props } render={ props => !(isUserAuthenticated()) && <Redirect to="/" /> } />
     );
}
 
export default NoReLogin;