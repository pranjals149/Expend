import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import Orders from './Components/Orders/Orders';
import Order from './Components/Orders/Order/Order';

import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51HlsqsEJTBWipWhA6UIua1R9qKRQREaPlfN3LAXzfGVgQsUS0ih6E88edf3Fwd1uvAouB6KI7W1shuN5bg8xDedO00jTJMiHMh");

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path='/order'>
            <Header />
            <Order />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
