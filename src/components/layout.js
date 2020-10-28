import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Button,Grid, Link, Paper } from '@material-ui/core';
import { isUserAuthenticated, deauthenticateUser } from '../requests/auth';
import {DataContext} from '../context/dataContext'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background,
    color: theme.palette.fontColor,
    minHeight: '100vh'
  },
}));


const Layout = ({children}) => {
    const classes = useStyles();
    const {setauth} = useContext(DataContext)

    const handleClick = () => {
      deauthenticateUser();
      setauth(false);
    }

    return ( 
    <>
    <Paper className={classes.paper}>
      {isUserAuthenticated() &&
        <Grid container justify='center'>
          <Link href='/' underline='none'>
              <Button fullWidth color='secondary' onClick={handleClick}>Desloguear</Button>
          </Link>
        </Grid>   
      }
    {children}
    </Paper>
    </> 
    );
}
 
export default Layout;