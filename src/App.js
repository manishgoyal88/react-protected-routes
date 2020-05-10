import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProtectedRoute from './ProtectedRoute';

import AppLayout from './AppLayout';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <h1>Introduction to public & protected react routes.</h1>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <ProtectedRoute exact path="/app" component={AppLayout} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;