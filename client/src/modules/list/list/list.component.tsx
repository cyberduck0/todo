import React, { Fragment } from 'react';
import { PaginatedTodos, TODO_LIST_MAX_PER_PAGE } from '../list-item/list-item.model';
import ListItemComponent from '../list-item/list.component';
import { RouteComponentProps } from 'react-router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import AddListModal from '../add-list-modal/add-list-modal.component';
import { Button, Divider } from '@material-ui/core';
import './list.component.scss';

const GET_LIST_ITEMS = gql`
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

interface ListItemProps extends RouteComponentProps {}

const ListComponent: React.FC<ListItemProps> = (props) => {

  let displayLimit = TODO_LIST_MAX_PER_PAGE;
  
  const { loading, error, data, fetchMore } = useQuery<PaginatedTodos>(GET_LIST_ITEMS, {
    variables: {
      skip: 0,
      limit: displayLimit
    },
    fetchPolicy: "cache-and-network"
  });

  const onLoadMore = () => {
    displayLimit = displayLimit + TODO_LIST_MAX_PER_PAGE;
    fetchMore ({
      variables: {
        skip: data?.todos?.items.length,
        limit: displayLimit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const items = [...prev.todos.items, ...fetchMoreResult.todos.items];
        return {todos: {items, limit: displayLimit, skip: fetchMoreResult.todos.skip, total: fetchMoreResult.todos.total, __typename: "PaginatedTodos"}};
      }
    })
  }

  return (
    <Fragment>
      <AddListModal></AddListModal>
      <Divider/>
      <div className="lists-wrapper">
        { loading ? <p>Loading ...</p> : null }
        { error ? <p>There was an error fetching the list, please try again. </p> : null }
        { !data || !data.todos || !data.todos.items.length ? <p>No Todo lists available. </p> : null }
        { data && data.todos ? data.todos.items.map(listItem => (
          <ListItemComponent key={listItem.id} {...listItem} clicked={() => { props.history.push(`${props.match.url}/${listItem.id}`) }}/>
        )) : null }
        { data && data.todos && (data.todos.total > data.todos.items.length) ? <Button variant="contained" color="primary" onClick={() => onLoadMore()}>Load more &hellip;</Button> : null }
      </div>
    </Fragment>
  );
}

export default ListComponent;
