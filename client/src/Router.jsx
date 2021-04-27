import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import { useAuthContext } from './context/context';

const Router = () => {
  const { loggedIn } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>Mern Authentication</h1>
        </Route>

        {loggedIn === false && (
          <>
            <Route path="/register">
              <Form />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}

        {loggedIn === true && (
          <>
            <Route path="/customer">
              <div>Customers</div>
            </Route>
            <Route path="/logout">
              <h1>GTFO!@!!</h1>
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
