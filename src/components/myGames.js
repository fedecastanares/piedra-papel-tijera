import React, {Fragment, useContext} from 'react';

import {Grid, List, ListItem, ListItemText, Typography,Divider, Link} from '@material-ui/core';
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

const MyGames = () => {
    const classes = useStyles();
    const {games} = useContext(DataContext);
    


    const handleClick = id => {
        
    }
    
    return ( 
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3" gutterBottom color='primary' align='center' >My games</Typography></Grid>
                <Grid item xs={12}>
                    <div className={classes.root}>
                        <List component="nav" aria-label="players">
                            {games && games.games.map(game => (
                                <Fragment key={game._id}  >
                                    <Link href={`/game/${game._id}`} underline='none'>
                                        <ListItem button onClick={() => handleClick(game._id)}>
                                            <ListItemText >
                                                <Grid container spacing={3}>
                                                    <Grid item>
                                                        <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >{"Rival "+ game.idRival}</Typography> 
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >{"Status: " + game.status}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </ListItemText>
                                        </ListItem>
                                    </Link>
                                <Divider className={classes.divider} />
                                </Fragment>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
     );
}
 
export default MyGames;