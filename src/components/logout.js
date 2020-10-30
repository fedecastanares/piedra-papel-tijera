import React from 'react';

import {Link, IconButton} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {deauthenticateUser} from '../requests/auth'

const LogOut = () => {

    const handleClick = () => {
        deauthenticateUser();
      }

    return ( 
        <>
        <Link href='/' underline='none'>
            <IconButton color='inherit' size='medium' onClick={handleClick}>
                <ExitToAppIcon/>
            </IconButton>
        </Link>
        </>
     );
}
 
export default LogOut;