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
    }
  }));

const ListGames = ({listGames, text}) => {
    const classes = useStyles();
    const {games, setActiveGame} = useContext(DataContext);
    
    const handleClick = id => {
        const dataGame = listGames.games.find(game => game._id === id);
        setActiveGame({game:dataGame});
    }
    
    return ( 
       <>
           <Grid container>
               <Grid item xs={12}>
                   <Typography variant="h3" component="h3" gutterBottom color='primary' align='center' >{text}</Typography></Grid>
               <Grid item xs={12}>
                   <div className={classes.root}>
                       <List component="nav" aria-label="players">
                           {listGames && games ? listGames.map(game => (
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
                                                               {"Rival "+ games.id === game.idRival ? game.nameHost : game.nameRival}
                                                       </Typography> 
                           <p>{games.id}  =  {game.idRival}</p>
                                                   </Grid>
                                                   <Grid item>
                                                       <Typography 
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
                               <CircularProgress />
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