import React , {useContext}from 'react';
import {Grid} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { DataContext } from '../../context/dataContext';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '0.3rem' ,
        marginBottom: '0.3rem' 
    },

}))

const HistoyRank = ({list}) => {
    const classes = useStyles();
    const {games} = useContext(DataContext);

    const getValues = () => {
        if (list && games.id !== undefined) {
            var values = {
                wins: 0,
                tie : 0,
                lose: 0
            }
            list.map(game => {
                switch(game.idWin) {
                    case games.id: 
                        return values = {...values, wins : values.wins + 1 }
                    case 'tie':
                        return values = {...values, tie : values.tie + 1 }
                    default :
                        return values = {...values, lose : values.lose + 1 }
                }
            })
            return values;
        } else {
            return false
        }
    }

    const values = getValues();
    return (
        <Grid container className={classes.root} justify='space-around'>
            <Grid item>
                <Alert severity="success">G: {values.wins}</Alert>
            </Grid>
            <Grid item>
                <Alert severity="warning">E: {values.tie}</Alert>
            </Grid>
            <Grid item>
                <Alert severity="error">P: {values.lose}</Alert>
            </Grid>
        </Grid>
    )
}
export default HistoyRank;