import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Palette = ({children}) => {
    const [darkmode, setdarkMode] = React.useState(false);

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
          listPlayers: darkmode ? '#fff' : '#e3e3e3',
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