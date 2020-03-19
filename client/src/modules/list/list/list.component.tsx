import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import AddListModal from '../add-list-modal/add-list-modal.component';
import { Todo } from '../list-item/list-item.model';
import ListItemComponent from '../list-item/list.component';

const GET_LIST_ITEMS = gql`
  query TodoItems {
    todos {
      id
      title
      comment
      items {
        content
        done
        created
      }
    }
  }
`;

interface WrappedListItem {
  todos: Todo[];
}

const ListComponent: React.FC<RouteComponentProps> = props => {
  const { loading, error, data } = useQuery<WrappedListItem>(GET_LIST_ITEMS);

  return (
    <Fragment>
      <AddListModal />
      {loading ? <p>Loading ...</p> : null}
      {error ? <p>There was an error fetching the list, please try again. </p> : null}
      {!data || !data.todos.length ? <p>No Todo lists available. </p> : null}
      {data
        ? data.todos.map(listItem => (
            <ListItemComponent
              key={listItem.id}
              {...listItem}
              clicked={() => {
                props.history.push(`${props.match.url}/${listItem.id}`);
              }}
            />
          ))
        : null}
    </Fragment>
  );
};

export default ListComponent;
