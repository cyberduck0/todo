import React, { Component } from 'react';
import UserCard from '../user-card';
import InviteFriends from './components/inviteFriends';
import urls, { SideBarItem } from './constants';
import SideBarItemComponent from './item/side-bar-item.component';
import './side-bar.component.scss';

export default class SideBar extends Component {
  render() {
    return (
      <div id='app-sidebar'>
        <UserCard />
        {urls.map((singleUrl: SideBarItem, index: number) => (
          <SideBarItemComponent key={index} tag={singleUrl.tag} url={singleUrl.url} icon={singleUrl.icon} />
        ))}
        <InviteFriends />
      </div>
    );
  }
}
