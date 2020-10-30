import React, {Fragment, useContext} from 'react';
import {Grid, List, ListItem, ListItemText, Typography,Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DataContext} from '../context/dataContext'

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1vh',
        backgroundColor: theme.palette.listPlayers,
    },
    divider: {
        backgroundColor: theme.palette.divider,
    }
  }));

const SearchRivals = () => {
    const classes = useStyles();
    
    const {rivals, games, setActiveGame} = useContext(DataContext);

    const handleClick = (id, nameRival) => {
        const newGameModel = {
            game: {
                idRival: id,
                idHost: games.id,
                status: "newGame",
                nameRival: nameRival
            }}
        setActiveGame(newGameModel)
    }
    
    return ( 
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3" gutterBottom color='primary' align='center' >Desafiar</Typography></Grid>
                <Grid item xs={12}>
                    <div className={classes.root}>
                        <List component="nav" aria-label="players">
                            {rivals && rivals.players.map(rival => (
                                <Fragment key={rival._id}  >
                                <ListItem button onClick={() => handleClick(rival._id, rival.name)}>
                                    <ListItemText >
                                        <Grid container spacing={3}>
                                            <Grid item>
                                                <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >{rival.name}</Typography> 
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >{"id: " + rival._id}</Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItemText>
                                </ListItem>
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
 
export default SearchRivals;