import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Button,Grid, Link, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background,
    color: theme.palette.fontColor,
    minHeight: '100vh'
  },
}));


const Layout = ({children}) => {
    const classes = useStyles();

    return ( 
    <>
    <Paper className={classes.paper}>
      <Grid container justify='center'>
        <Link href='/' underline='none'>
            <Button fullWidth color='secondary'>Ir a administrador</Button>
        </Link>
      </Grid>
        {children}
    </Paper>
    </> 
    );
}
 
export default Layout;