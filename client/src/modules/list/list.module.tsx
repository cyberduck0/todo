import React, { Component } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import ListComponent from './list/list.component';
import SingleListItemComponent from './single-list-item/single-list-item.component';

export default class ListModule extends Component<RouteComponentProps> {
  render() {
    return (
      <Switch>
        <Route path={this.props.match.url} exact component={ListComponent} />
        <Route path={`${this.props.match.url}/:itemId`} component={SingleListItemComponent} />
      </Switch>
    );
  }
}