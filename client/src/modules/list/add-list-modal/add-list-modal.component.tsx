import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import gql from 'graphql-tag';
import React from 'react';
import './add-list-modal.component.scss';

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

const ADD_TODO_LIST = gql`
  mutation addTodo($title: String!, $comment: String) {
    addTodo(title: $title, comment: $comment) {
      id
      title
      comment
    }
  }
`;

export default function AddListModal() {
  const [open, setOpen] = React.useState(false);

  const titleInputRef = React.createRef<HTMLInputElement>();
  const commentInputRef = React.createRef<HTMLTextAreaElement>();

  const [addTodo] = useMutation(ADD_TODO_LIST);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='modal-wrapper'>
      <Button onClick={handleOpen} variant='contained' color='primary' className='add-button' endIcon={<AddIcon />}>
        Add List
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className='modal-inner'>
          <h2>Add a new ToDo list</h2>
          <form
            className='add-list-form'
            onSubmit={e => {
              e.preventDefault();
              if (titleInputRef.current && commentInputRef.current) {
                addTodo({
                  variables: {
                    title: titleInputRef.current.value,
                    comment: commentInputRef.current.value,
                  },
                  refetchQueries: [{ query: GET_LIST_ITEMS }],
                });
                titleInputRef.current.value = '';
                commentInputRef.current.value = '';
                handleClose();
              }
            }}>
            <TextField label='Title' fullWidth={true} inputRef={titleInputRef} />
            <TextField label='Comment' multiline={true} rows='5' fullWidth={true} inputRef={commentInputRef} />
            <Button type='submit' variant='contained' color='primary' className='submit-button'>
              Add Todo
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
