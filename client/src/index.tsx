import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginComponent from './components/login';
import './index.scss';
import UserAuthServiceContainer, { UserAuthService, UserAuthServiceModel } from './modules/services/user-auth.service';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

import { GET_LOCAL_USER_QUERY } from './services/user.service';

const cache = new InMemoryCache();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4001/',
  }),
  resolvers: {
    Query: {
      // tslint:disable-next-line: no-shadowed-variable
      currentUser: (_, _args, { cache }) => {
        const { currentUser } = cache.readQuery({ query: GET_LOCAL_USER_QUERY });

        return currentUser;
      },
    },
  },
});

const data = {
  currentUser: {
    __typename: 'currentUser',
  },
};

cache.writeData({ data });
client.onResetStore(() => Promise.resolve(cache.writeData({ data })));

class IsLoggedIn extends Component {
  render() {
    return (
      <UserAuthServiceContainer>
        <UserAuthService.Consumer>
          {(state: UserAuthServiceModel) => {
            if (state.state) {
              return <App />;
            }
            return <LoginComponent />;
          }}
        </UserAuthService.Consumer>
      </UserAuthServiceContainer>
    );
  }
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
