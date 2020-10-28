import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/login';
import Games from './pages/games';
import Game from './pages/game';
import Layout from './components/layout';
import Palette from './palette';
import DataProvider from './context/dataContext';
import PrivateRoute from './components/privateRoute';


function App() {
  return (
    <>
    <DataProvider>
      <Palette>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path='/' component={Admin} />
              <PrivateRoute exact path='/user'  component={Admin} />
              <PrivateRoute exact path='/games' component={Games} />
              <PrivateRoute exact path='/game/:id'  component={Game}/>
            </Switch>
          </Router>
        </Layout>
      </Palette>
    </DataProvider>
    </>
  );
}

/* Ejemplos redirect login-redux 
  <Route exact path='/signup' render={(props) => isUserAuthenticated() ? <Redirect to='/users' /> : <Signup props={props} />} />
  <Route exact path='/users' render={(props) => isUserAuthenticated() ? <Users props={props}/> : <Redirect to='/' />} />
*/

export default App;
