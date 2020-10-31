import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/login';
import User from './pages/user';
import Palette from './palette';
import DataProvider from './context/dataContext';
import PrivateRoute from './components/privateRoute';


function App() {
  return (
    <>
    <DataProvider>
      <Palette>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path='/' component={User} />
          </Switch>
        </Router>
      </Palette>
    </DataProvider>
    </>
  );
}

export default App;
