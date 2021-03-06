import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // runs only once when app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('USER IS - ', authUser);
      if (authUser) {
        // the user just logged in / the user was already logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //Uuer is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Payment />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
