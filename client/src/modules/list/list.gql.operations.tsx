import gql from 'graphql-tag';

export const GET_LIST_ITEMS = gql`
  query TodoItems($skip: Int!, $limit: Int!) {
    todos(skip: $skip, limit: $limit) {
      skip,
      limit,
      total,
      items {
        id,
        title,
        comment,
        items {
          content
          done
          created
        },
      }
    }
  }
`;