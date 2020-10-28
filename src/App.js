import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/login';
import User from './pages/user';
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
              <PrivateRoute exact path='/' component={User} />
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
