import { useMutation, useQuery } from '@apollo/react-hooks';
import { Button, Checkbox, IconButton, Modal, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import gql from 'graphql-tag';
import React, { Fragment, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import SortableList from '../../../components/sortable-list';
import { Todo, TodoItem } from '../list-item/list-item.model';
import './single-list-item.component.scss';

interface WrappedTodo {
  todo: Todo;
}

const GET_TODO = gql`
  query todo($id: String!) {
    todo(id: $id) {
      id
      title
      comment
      items {
        id
        todoId
        content
        done
        created
        index
      }
    }
  }
`;

const EDIT_TODO = gql`
  mutation editTodo($id: String!, $title: String, $comment: String) {
    editTodo(id: $id, title: $title, comment: $comment) {
      id
      title
      comment
    }
  }
`;

const ADD_TODO_ITEM = gql`
  mutation addTodoItem($todoId: String!, $content: String!) {
    addTodoItem(todoId: $todoId, content: $content) {
      index
    }
  }
`;

const EDIT_TODO_ITEM = gql`
  mutation editTodoItem($todoId: String!, $id: String!, $content: String, $done: Boolean, $index: Float) {
    editTodoItem(todoId: $todoId, id: $id, content: $content, done: $done, index: $index) {
      id
      todoId
      content
      done
      created
      index
    }
  }
`;

const REMOVE_TODO_ITEM = gql`
  mutation removeTodoItem($todoId: String!, $id: String!) {
    removeTodoItem(todoId: $todoId, id: $id)
  }
`;

const SingleListItemComponent: React.FC<RouteComponentProps<{
  todoId: string;
}>> = props => {
  const [itemsToAdd, setItemsToAdd] = useState('');
  const [addTodoItemOpen, setAddTodoItemOpen] = useState(false);
  const [validTitle, setValidTitle] = useState(true);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [items, setItems] = useState<TodoItem[]>([]);

  const { data, loading, error } = useQuery<WrappedTodo>(GET_TODO, {
    variables: { id: props.match.params.todoId },
  });

  const [editTodo] = useMutation(EDIT_TODO);
  const [addTodoItem] = useMutation(ADD_TODO_ITEM, {
    refetchQueries: [
      {
        query: GET_TODO,
        variables: { id: props.match.params.todoId },
      },
    ],
  });
  const [editTodoItem] = useMutation(EDIT_TODO_ITEM);
  const [removeTodoItem] = useMutation(REMOVE_TODO_ITEM, {
    refetchQueries: [
      {
        query: GET_TODO,
        variables: { id: props.match.params.todoId },
      },
    ],
  });

  const handleTodoItemOpen = () => {
    setAddTodoItemOpen(true);
  };

  const handleTodoItemClose = () => {
    setItemsToAdd('');
    setAddTodoItemOpen(false);
  };

  const getCopyOfGivenItems = (givenItems: TodoItem[] = []): TodoItem[] => {
    const copiedItems: TodoItem[] = [];
    givenItems?.forEach(item => copiedItems.push({ ...item }));
    return copiedItems;
  };

  const editSelectedItem = (id: string, newContent: string) => {
    const itemsForState = getCopyOfGivenItems(items);
    const editedItemIndex = itemsForState.findIndex(item => item.id === id);
    itemsForState[editedItemIndex].content = newContent;
    setItems(itemsForState);
  };

  const isContentChanged = (id: string, newContent: string): boolean => {
    const originalItem = data?.todo.items.find(item => item.id === id);
    return originalItem?.content !== newContent;
  };

  useEffect(() => {
    setTitle(data?.todo.title ?? '');
    setComment(data?.todo.comment ?? '');
    setItems(getCopyOfGivenItems(data?.todo.items));
  }, [data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>There is no data for selected todo.</p>;

  return (
    <Fragment>
      <h2>Edit {data.todo.title}</h2>
      <TextField
        label='Title'
        fullWidth={true}
        value={title}
        required={true}
        onChange={e => setTitle(e.target.value)}
        onBlur={e => {
          const isTitleValid = e.target.value.trim().length > 0;
          if (isTitleValid && e.target.value !== data?.todo.title) {
            editTodo({
              variables: {
                id: data.todo.id,
                title: e.target.value,
              },
            });
          }
          setValidTitle(isTitleValid);
        }}
      />
      <em hidden={validTitle}>Title is required</em>
      <TextField
        label='Comment'
        fullWidth={true}
        value={comment}
        onChange={e => setComment(e.target.value)}
        onBlur={e => {
          if (e.target.value !== data?.todo.comment) {
            editTodo({
              variables: {
                id: data.todo.id,
                comment: e.target.value,
              },
            });
          }
        }}
      />
      <div className='todo-item-list'>
        <div className='todo-item-container'>
          <h4>Items</h4>
          <IconButton onClick={handleTodoItemOpen} color='primary' title='Add items' size='small'>
            <AddIcon />
          </IconButton>
        </div>
        <Modal open={addTodoItemOpen} onClose={handleTodoItemClose}>
          <div className='modal-inner'>
            <h2>Add new Todo items</h2>
            <p>You can add more todo items at once by dividing them with enter</p>
            <TextField multiline={true} label='Items' rows='4' fullWidth={true} onChange={e => setItemsToAdd(e.target.value)} />
            <div className='modal-bottom-container'>
              <Button
                variant='contained'
                color='primary'
                disabled={itemsToAdd.trim().length === 0}
                onClick={() => {
                  const dividedTodoItems = itemsToAdd.split('\n');
                  dividedTodoItems.forEach(item => {
                    if (item.trim().length !== 0) {
                      addTodoItem({
                        variables: {
                          todoId: data.todo.id,
                          content: item,
                        },
                      });
                    }
                  });
                  handleTodoItemClose();
                }}>
                Add todo items
              </Button>
              <Button variant='contained' color='default' className='cancel-button' onClick={() => handleTodoItemClose()}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
        <SortableList
          items={items}
          onOrderChange={({ item: changedItem, newIndex }) => {
            editTodoItem({
              variables: {
                ...changedItem,
                index: newIndex,
              },
            });
          }}>
          {(item: TodoItem) => (
            <div key={item.id} className='todo-item-container'>
              <Checkbox
                checked={item.done}
                color='primary'
                onChange={e => {
                  editTodoItem({
                    variables: {
                      ...item,
                      done: e.target.checked,
                    },
                  });
                }}
              />

              <TextField
                fullWidth={true}
                value={item.content}
                onChange={e => editSelectedItem(item.id, e.target.value)}
                onBlur={e => {
                  if (isContentChanged(item.id, item.content)) {
                    editTodoItem({
                      variables: {
                        ...item,
                        content: e.target.value,
                      },
                    });
                  }
                }}
              />

              <IconButton
                color='secondary'
                title='Remove item'
                component='span'
                size='small'
                onClick={() => {
                  removeTodoItem({
                    variables: {
                      todoId: item.todoId,
                      id: item.id,
                    },
                  });
                }}>
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </SortableList>
      </div>
    </Fragment>
  );
};

export default SingleListItemComponent;
