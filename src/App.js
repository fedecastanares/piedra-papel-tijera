import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/login';
import Play from './pages/play';
import Layout from './components/layout';
import Palette from './palette';
import { isUserAuthenticated } from './requests/auth';


function App() {
  return (
    <>
    <Palette>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/'  render={(props) => isUserAuthenticated() ? <Admin props={props}/> : <Redirect to='/login' /> }  />
            <Route exact path='/login'  render={(props) => isUserAuthenticated() ? <Redirect to='/' /> : <Login props={props}/> }/>
            <Route exact path='/user'  render={(props) => isUserAuthenticated() ? <Admin props={props}/> : <Redirect to='/login' /> }/>
            <Route exact path='/play'  render={(props) => isUserAuthenticated() ? <Play props={props}/> : <Redirect to='/login' />}/>
          </Switch>
        </Router>
      </Layout>
    </Palette>
    </>
  );
}

/* Ejemplos redirect login-redux 
  <Route exact path='/signup' render={(props) => isUserAuthenticated() ? <Redirect to='/users' /> : <Signup props={props} />} />
  <Route exact path='/users' render={(props) => isUserAuthenticated() ? <Users props={props}/> : <Redirect to='/' />} />
*/

export default App;
