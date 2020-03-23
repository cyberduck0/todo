import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './modules/home/home.component';
import ListModule from './modules/list/list.module';

export default class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={HomeComponent} />
        <Route path='/list' component={ListModule} />
      </Switch>
    );
  }
}
