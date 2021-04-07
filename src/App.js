import React from 'react';
import Header from './components/Header';
import HomePage from './Pages/Homepage';
import './default.scss';
import { Route, Switch } from 'react-router-dom';
import Register from './Pages/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path='/' component={HomePage}>
            <HomePage />
          </Route>
          <Route path='/register' component={Register}>
            <Register />
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
