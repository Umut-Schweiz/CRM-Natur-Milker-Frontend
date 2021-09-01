import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ContactUs from './pages/contactus/ContactUs';
import Form from './pages/signup/Form';
import Login from './pages/login/Login';
import MyAccount from './pages/myaccount/MyAccount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/sign-up' component={Form} />
      <Route path='/login' component={Login} />
      <Route path='/my-account' component={MyAccount} />
    </Switch>
  </Router>
  );
}

export default App;
