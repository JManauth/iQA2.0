import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';
import AddEval from './pages/AddEval';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    
    <Router>
      <Switch>
      <Route exact path='/'>
          <LandingPage/>
          </Route>
        <Route exact path='/login'>
          <Login/>
          </Route>
        <Route exact path='/add-eval' >
          <AddEval />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
    

  );
}

export default App;
