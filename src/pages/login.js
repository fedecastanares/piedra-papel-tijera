import React from 'react';
import Login from '../components/login'
import Copyright from '../components/copyright'


const LoginPage = ({history}) => {
    return ( 
        <>
            <Login history={history}/>
            <Copyright/>
        </>
     );
}
 
export default LoginPage;