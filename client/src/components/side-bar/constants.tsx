import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import React from 'react';

export interface SideBarItem {
  tag: string;
  url: string;
  icon?: JSX.Element;
}

export default [
  {
    tag: 'Home',
    url: '/',
    icon: <HomeIcon />,
  },
  {
    tag: 'List',
    url: '/list',
    icon: <ListIcon />,
  },
] as SideBarItem[];
