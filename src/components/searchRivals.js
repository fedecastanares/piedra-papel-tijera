import React from 'react';
import {Grid, Container, List, ListItem, ListItemText, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { playersRequest } from '../requests/play';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1vh',
        backgroundColor: theme.palette.listPlayers,
    },
  }));

const SearchRivals = () => {
    const classes = useStyles();
    const [players, setplayers] = React.useState([]);
    
    const handleClick = async () => {
        const players = await playersRequest();
        setplayers(players);
    }
    return ( 
        <>
        <Container>
            <Grid container>
                <Grid item>
                    Buscador
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleClick}>Buscar</Button>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.root}>
                        <List component="nav" aria-label="players">
                            {players.map(player => (
                                <ListItem divider button key={player._id}>
                                <ListItemText>
                                    {player.name}
                                </ListItemText>
                            </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </Container>
        </>
     );
}
 
export default SearchRivals;