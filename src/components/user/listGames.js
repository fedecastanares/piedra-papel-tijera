import React, {Fragment, useContext} from 'react';

import {Grid, List, ListItem, ListItemText, Typography,Divider, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DataContext} from "../../context/dataContext";



const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1vh',
        backgroundColor: theme.palette.listPlayers,
        padding: '0.5rem'
    },
    divider: {
        backgroundColor: theme.palette.divider,
    },
    status: {
        marginTop: '0.2rem',
        fontSize: '0.8rem',
        color: theme.palette.fontColorLight,
    },
    tittle: {
        marginBottom: '1rem'
    },
    list: {
        maxHeight: '30vh',
        overflow: 'auto',
        [theme.breakpoints.up('sm')] : {
            maxHeight: '60vh',
        }
    }
  }));

const ListGames = ({list, text, children}) => {
    const classes = useStyles();
    const {games, setActiveGame} = useContext(DataContext);
    
    const handleClick = id => {
        const dataGame = list.find(game => game._id === id);
        setActiveGame({
            game:dataGame
        });
    }
    
    return ( 
       <>
       <div className={classes.root}>
           <Grid container>
               <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography variant="h5" component="h5" gutterBottom color='primary' >{text}</Typography></Grid>
                        </Grid>
                        <Grid item className={classes.tittle}>
                            {children}
                        </Grid>
                    </Grid>
               <Grid item xs={12}>
                    <List component="nav" aria-label="players" className={classes.list}>
                        {list.length() > 0 && games ? list.map(game => (
                            <Fragment key={game._id}  >
                                    <ListItem button onClick={() => handleClick(game._id)}>
                                        <ListItemText >
                                            <Grid container spacing={3}>
                                                <Grid item>
                                                    <Typography 
                                                        variant="body1" 
                                                        component="p" 
                                                        gutterBottom 
                                                        color='inherit' 
                                                        align='center' >
                                                            Rival {games.id === game.idRival ? game.nameHost : game.nameRival}
                                                    </Typography> 
                                                </Grid>
                                                <Grid item>
                                                    <Typography 
                                                        className={classes.status}
                                                        variant="body1" 
                                                        component="p" 
                                                        gutterBottom 
                                                        color='inherit' 
                                                        align='center' >
                                                            {"Status: " + game.status}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </ListItemText>
                                    </ListItem>
                            <Divider className={classes.divider} />
                            </Fragment>
                        )): 
                        <Grid container justify='center'>
                            <CircularProgress style={{padding: 20}}/>
                        </Grid>
                        }
                    </List>
               </Grid>
           </Grid>
        </div>
       </>
    );
    
}
 
export default ListGames;