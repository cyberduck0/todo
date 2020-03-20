import { useApolloClient } from '@apollo/react-hooks';
import React, { useState } from 'react';

export interface UserAuthServiceModel {
  state: boolean;
  setState: (v: boolean) => void;
}

export const UserAuthService = React.createContext<UserAuthServiceModel>({
  state: false,
  setState: () => void 0,
});

const UserAuthServiceContainer: React.FC<{}> = props => {
  const [loggedIn, setLoggedInState] = useState(false);
  const userCache = useApolloClient();

  const setNewUserState = (newVal: boolean) => {
    setLoggedInState(newVal);
    if (newVal) {
      userCache.writeData({
        data: {
          currentUser: {
            __typename: 'User',
            id: '9h3bhgrnjmfdv',
            name: 'Jack',
            lastName: 'Black',
            username: 'jack.black@gmail.com',
            role: 'Marketing',
          },
        },
      });
    }
  };

  return (
    <UserAuthService.Provider
      value={{
        state: loggedIn,
        setState: setNewUserState,
      }}>
      {props.children}
    </UserAuthService.Provider>
  );
};

export default UserAuthServiceContainer;
