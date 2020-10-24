import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Button,Grid, Link } from '@material-ui/core';




const Layout = ({children}) => {

    const [darkmode, setdarkMode] = React.useState(true);

    const theme = createMuiTheme({
        palette: {
          type: darkmode ? 'dark': 'light' ,
          primary: {
            main: '#aff',
          },
          secondary: {
            main: '#c00',
          },
          background: {
            main: darkmode ? '#f2f' : '#242'
          },
        },
      })
    return ( 
    <>
    <ThemeProvider theme={theme}>
        <Grid container justify='center'>
            <Link href='/'>
                <Button fullWidth color='secondary'>Ir a administrador</Button>
            </Link>
        </Grid>
        {children}
    </ThemeProvider>
    </> 
    );
}
 
export default Layout;