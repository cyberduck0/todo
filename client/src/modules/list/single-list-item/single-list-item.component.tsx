import React, { useState, useEffect, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Todo } from '../list-item/list-item.model';
import { TextField, Button, Modal, Checkbox, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './single-list-item.component.scss'

interface listItemProps extends RouteComponentProps<{ itemId: string }> {
}

interface WrappedTodo {
  todo: Todo;
}

const GET_TODO = gql`
  query todo ($id:String!){
    todo (id:$id) {
      id
      title
      comment
      items {
        id
        todoId
        content
        done
        created
      }
    }
  }`;

const EDIT_TODO = gql`
  mutation editTodo($id: String!, $title: String, $comment: String) {
    editTodo(id: $id, title: $title, comment: $comment){
      id
      title
      comment
    }
  }`;

const ADD_TODO_ITEM = gql`
  mutation addTodoItem($todoId : String!, $content: String!) {
    addTodoItem(todoId: $todoId, content: $content) {
      index
    }
  }`;

const EDIT_TODO_ITEM = gql`
  mutation editTodoItem($todoId: String!, $id: String!, $content: String, $done: Boolean) {
    editTodoItem(todoId: $todoId, id: $id, content: $content, done: $done) {
      id
      todoId
      content
      done
      created
    }
  }`;

const REMOVE_TODO_ITEM = gql`
  mutation removeTodoItem($todoId: String!, $id: String!) {
    removeTodoItem(todoId: $todoId, id: $id)
  }
`;

const SingleListItemComponent: React.FC<listItemProps> = (props) => {
  const [items, setItems] = useState("");
  const [addTodoItemOpen, setAddTodoItemOpen] = useState(false);
  const [validTitle, setValidTitle] = useState(true);
  const [title, setTitle] = useState("");

  const { data, loading, error } = useQuery<WrappedTodo>(GET_TODO,
    { variables: { id: props.match.params.itemId } }
  );

  const [editTodo] = useMutation(EDIT_TODO);
  const [addTodoItem] = useMutation(ADD_TODO_ITEM, {
    refetchQueries: 
    [{ 
      query: GET_TODO, 
      variables: { id: props.match.params.itemId } 
    }],
  });
  const [editTodoItem] = useMutation(EDIT_TODO_ITEM);
  const [removeTodoItem] = useMutation(REMOVE_TODO_ITEM, {
    refetchQueries: 
    [{ 
      query: GET_TODO, 
      variables: { id: props.match.params.itemId } 
    }],
  });

  const handleTodoItemOpen = () => {
    setAddTodoItemOpen(true);
  };

  const handleTodoItemClose = () => {
    setAddTodoItemOpen(false);
  }; 

  useEffect(() => {
    setTitle(data?.todo.title ?? "");
  }, [data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>There is no data for selected todo.</p>;

  return (
    <div>
      <h2>Edit {data.todo.title}</h2>
      <TextField name="titleField" label="Title" fullWidth value={title} required
        onChange={(e) => setTitle(e.target.value)}
        onBlur={(e) => {
          if (e.target.value && e.target.value.trim().length > 0) {
            editTodo({
              variables: {
                id: data.todo.id,
                title: e.target.value
              }
            })
            setValidTitle(true);
          }
          else { setValidTitle(false); }
        }} />
        <em hidden={validTitle}>Title is required</em>
      <TextField label="Comment" fullWidth value={data.todo.comment}
        onChange={(e) => {
          editTodo({
            variables: {
              id: data.todo.id,
              comment: e.target.value
            }
          })
        }} />
      <div className="todo-item-list">
        <div className="todo-item-container">
          <b>Items</b>
          <IconButton onClick={handleTodoItemOpen}
            color="primary" title="Add items" size="small">
            <AddIcon />
          </IconButton>
        </div>
        <Modal open={addTodoItemOpen} onClose={handleTodoItemClose}>
          <div className="modal-inner">
            <h2>Add new Todo items</h2>
            <p>You can add more todo items at once by dividing them with enter</p>
            <TextField multiline={true} label="Items" rows="4" fullWidth onChange={(e) => setItems(e.target.value)} />
            <div className="modal-bottom-container">
              <Button variant="contained" color="primary" disabled={items.trim().length === 0}
                onClick={() => {
                    const dividedTodoItems = items.split('\n');
                    dividedTodoItems.forEach(item => {
                      if (item.trim().length !== 0) {
                        addTodoItem({
                          variables: {
                            todoId: data.todo.id,
                            content: item
                          }
                        });
                      }
                    });
                    setItems("");
                  handleTodoItemClose();
                }}>
                Add todo items</Button>
              <Button variant="contained" color="default" className="cancel-button"
                onClick={() => handleTodoItemClose()}>Cancel</Button>
            </div>
          </div>
        </Modal>
        <Fragment>
          {data.todo.items?.map((item) => {
            return <div key={item.id} className="todo-item-container">
              <Checkbox checked={item.done} color="primary"
                onChange={(e) => {
                  editTodoItem({
                    variables: {
                      ...item,
                      done: e.target.checked
                    }
                  })
                }} />

              <TextField fullWidth value={item.content}
                onChange={(e) => {
                  editTodoItem({
                    variables: {
                      ...item,
                      content: e.target.value
                    }
                  })
                }}>

              </TextField>
              <IconButton color="secondary" title="Remove item" aria-label="Remove list" component="span" size="small"
                onClick={() => {
                  removeTodoItem({
                    variables: {
                      todoId: item.todoId,
                      id: item.id
                    }
                  })
                }}><DeleteIcon /></IconButton>
            </div>
          })}
        </Fragment>
      </div>
    </div>
  );
}

export default SingleListItemComponent;
