import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/register">
          <Form />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/customer">
          <div>Customers</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
