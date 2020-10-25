import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/login';
import Layout from './components/layout';
import Palette from './palette';


function App() {
  return (
    <>
    <Palette>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/'  render={(props) => <Admin props={props}/> }  />
            <Route exact path='/login'  render={(props) => <Login props={props}/> }/>
            <Route exact path='/user'  render={(props) => <Login props={props}/> }/>
            <Route exact path='/play'  render={(props) => <Login props={props}/> }/>
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
