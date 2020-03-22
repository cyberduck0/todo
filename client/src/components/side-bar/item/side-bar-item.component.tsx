import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SideBarItem } from '../constants';
import './side-bar-item.component.scss';

export default class SideBarItemComponent extends Component<SideBarItem> {
  render() {
    return (
      <Link className='side-bar-item' to={this.props.url}>
        <span>{this.props.tag}</span>
        {this.props.icon}
      </Link>
    );
  }
}
