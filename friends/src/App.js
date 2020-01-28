import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Friends from './components/Friends'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/protected'>Protected Page</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
