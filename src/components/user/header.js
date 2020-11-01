import React from 'react';

import {Link, IconButton, Grid, Typography} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {deauthenticateUser, getUser} from '../../requests/auth'

const LogOut = () => {

    const handleClick = () => {
        deauthenticateUser();
      }

    return ( 
        <>
        <Grid item>
            <Grid container spacing={2}>
                <Grid item>
                    <AccountCircleIcon size='medium' />
                </Grid>
                <Grid item>
                    <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >{getUser()}</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Link href='/' underline='none'>
                <IconButton color='inherit' size='medium' onClick={handleClick}>
                    <ExitToAppIcon/>
                </IconButton>
            </Link>
        </Grid>
        </>
     );
}
 
export default LogOut;