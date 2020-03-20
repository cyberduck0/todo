import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Maybe from 'graphql/tsutils/Maybe';
import { useEffect, useState } from 'react';

export interface User {
  id: string;
  username: string;
  name: string;
  lastName: string;
  role: string;
}

export const GET_LOCAL_USER_QUERY = gql`
  {
    currentUser @client {
      id
      username
      name
      lastName
      role
    }
  }
`;

export function useUserState() {
  const [userState, setUserState] = useState<Maybe<User>>();
  const { data, error, loading } = useQuery<{ currentUser: User }>(GET_LOCAL_USER_QUERY);
  useEffect(() => {
    if (error || loading) {
      return;
    }

    return data && data.currentUser && setUserState(data.currentUser);
  }, [data, error, loading]);

  return userState;
}
