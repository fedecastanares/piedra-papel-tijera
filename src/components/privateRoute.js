import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserAuthenticated } from '../requests/auth'

const PrivateRoute = ({ component: Component, ...props  }) => {

    return ( 
        <Route { ...props } render={ props => isUserAuthenticated() ?  (
            <Component {...props} />
        )  : (
            <Redirect to="/login" />
            
        ) } />

     );
}
 
export default PrivateRoute;