import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import piedra from '../../../imgs/piedra.png'
import papel from '../../../imgs/papel.png'
import tijera from '../../../imgs/tijera.png'

const useStyles = makeStyles((theme) => ({
    imgRival: {
        height: '20vh',
        width: 'auto',
        transform: 'rotate(180deg)'
    }
}));

const UserPlaysImg = ({rivalPlay}) => {
    const classes = useStyles();

    switch(rivalPlay) {
        case 'piedra':
            return <img className={classes.imgRival} src={piedra} alt={`Jugo ${rivalPlay}`} />
        case 'papel':
            return <img className={classes.imgRival} src={papel} alt={`Jugo ${rivalPlay}`} />
        case 'tijera':
            return <img className={classes.imgRival} src={tijera} alt={`Jugo ${rivalPlay}`} />
        default:
            return <div className={classes.imgRival}></div>
    }
}
export default UserPlaysImg;