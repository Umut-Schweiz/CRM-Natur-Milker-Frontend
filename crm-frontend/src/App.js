import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Form from './components/pages/SignUp/Form';
import Login from './components/pages/Login';
import MyAccount from './components/pages/MyAccount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer'




function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/sign-up' component={Form} />
      <Route path='/login' component={Login} />
      <Route path='/my-account' component={MyAccount} />
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
