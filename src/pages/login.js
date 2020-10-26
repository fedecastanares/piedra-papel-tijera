import React from 'react';
import Login from '../components/login'
import Copyright from '../components/copyright'


const LoginPage = ({props}) => {
    return ( 
        <>
            <Login props={props}/>
            <Copyright/>
        </>
     );
}
 
export default LoginPage;