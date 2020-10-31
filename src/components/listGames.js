import React, {Fragment, useContext} from 'react';

import {Grid, List, ListItem, ListItemText, Typography,Divider, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DataContext} from "../context/dataContext";



const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1vh',
        backgroundColor: theme.palette.listPlayers,
    },
    divider: {
        backgroundColor: theme.palette.divider,
    },
    status: {
        marginTop: '0.2rem',
        fontSize: '0.8rem',
        color: theme.palette.fontColorLight,
    }
  }));

const ListGames = ({list, text}) => {
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
           <Grid container>
               <Grid item xs={12}>
                   <Typography variant="h5" component="h5" gutterBottom color='primary' >{text}</Typography></Grid>
               <Grid item xs={12}>
                   <div className={classes.root}>
                       <List component="nav" aria-label="players">
                           {list && games ? list.map(game => (
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
                   </div>
               </Grid>
           </Grid>
       </>
    );
    
}
 
export default ListGames;