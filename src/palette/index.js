import React, {useContext} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { DataContext } from '../context/dataContext';

const Palette = ({children}) => {
    const {darkmode} = useContext(DataContext)

    const theme = createMuiTheme({
        palette: {
          type: darkmode ? 'dark': 'light' ,
          primary: {
            main: '#f80',
          },
          secondary: {
            main: '#c00',
          },
          background: darkmode ? '#181818' : '#f9f9f9',
          fontColor: darkmode ? '#fff' : '#030303',
          fontColorLight: darkmode ? '#535353':'#a7a7a7',
          listPlayers: darkmode ? '#242424' : '#e3e3e34a',
          divider: '#ff88003d'
        },
      });

    return ( 
        <>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </>
     );
}
 
export default Palette;