import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import piedra from '../../../imgs/piedra.png'
import papel from '../../../imgs/papel.png'
import tijera from '../../../imgs/tijera.png'

const useStyles = makeStyles((theme) => ({
    img: {
        height: '20vh',
        width: 'auto'
    }
}));

const UserPlaysImg = ({userPlays}) => {
    const classes = useStyles();

    const Img = () => {
        switch(userPlays) {
            case 'piedra':
                return <img className={classes.img} src={piedra} alt={`Jugo ${userPlays}`} />
            case 'papel':
                return <img className={classes.img} src={papel} alt={`Jugo ${userPlays}`} />
            case 'tijera':
                return <img className={classes.img} src={tijera} alt={`Jugo ${userPlays}`} />
            default:
                return <div className={classes.img}></div>
        }
    }

    return (
        <Img/>
    )
}
export default UserPlaysImg;