import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';
import AddEval from './pages/AddEval';


function App() {
  return (
    
    <Router>
      <Switch>
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
