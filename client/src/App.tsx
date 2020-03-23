import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainAppRouter from './app-router';
import ContentComponent from './components/content/content.component';
import SideBar from './components/side-bar';

export default class App extends Component {
  render() {
    return (
      <div id='app-container'>
        <BrowserRouter>
          <SideBar />
          <ContentComponent>
            <MainAppRouter />
          </ContentComponent>
        </BrowserRouter>
      </div>
    );
  }
}
