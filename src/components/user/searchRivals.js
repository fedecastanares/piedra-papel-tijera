import React, {Fragment, useContext, useState} from 'react';
import {Grid, List, ListItem, ListItemText, Typography,Divider, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {DataContext} from '../../context/dataContext';
import SearchBar from './searchBar';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1vh',
        backgroundColor: theme.palette.listPlayers,
        padding: '0.5rem'
    },
    divider: {
        backgroundColor: theme.palette.divider,
    },
    id: {
        marginTop: '0.2rem',
        fontSize: '0.8rem',
        color: theme.palette.fontColorLight,
    },
    list: {
        maxHeight: '30vh',
        overflow: 'auto',
        [theme.breakpoints.up('sm')] : {
            maxHeight: '60vh',
        }
    }
  }));

const SearchRivals = () => {
    const classes = useStyles();
    
    const {rivals, games, setActiveGame} = useContext(DataContext);
    const [searchString, setSearchString] = useState('')

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

    const RenderedList = ({rival}) => {
        return (
            <Fragment >
                <ListItem button onClick={() => handleClick(rival._id, rival.name)}>
                    <ListItemText >
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography variant="body1" component="p" gutterBottom color='inherit' align='center' >{rival.name}</Typography> 
                            </Grid>
                            <Grid item>
                                
                            </Grid>
                        </Grid>
                    </ListItemText>
                </ListItem>
                <Divider className={classes.divider} />
            </Fragment>
        )
    }
    
    return ( 
        <>
        <div className={classes.root}>
            <Grid container>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs>
                        <Typography variant="h5" component="h5" color='primary' >Desafiar</Typography>
                    </Grid>
                    <Grid item xs>
                        <SearchBar setSearchString={setSearchString} />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <List component="nav" aria-label="players" className={classes.list}>
                        {rivals.players !== undefined ? searchString === '' ? 
                            rivals.players.map(rival => (
                                <RenderedList key={rival._id} rival={rival} />
                            ))
                         : rivals.players.filter(rival => rival.name.startsWith(searchString)).map(rivalFilter =>(
                              <RenderedList key={rivalFilter._id} rival={rivalFilter} />
                            )) 
                         :
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
 
export default SearchRivals;