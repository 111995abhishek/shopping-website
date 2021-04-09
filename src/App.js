import React from 'react';
import Header from './components/Header';
import HomePage from './Pages/Homepage';
import './default.scss';
import { Route, Switch } from 'react-router-dom';
import Register from './Pages/Registration';
import Footer from './components/Footer';
import Login from './Pages/login';

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
          <Route path='/login' component={Login}>
            <Login/>
          </Route>
        </Switch>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
