import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import gql from 'graphql-tag';
import {GET_LIST_ITEMS} from '../list/list.component';
import './remove-list-modal.component.scss';
import DisplayLimit from '../list.context';

interface RemoveListProps {
  id: string;
}

const REMOVE_TODO_LIST = gql`
  mutation removeTodoList($id: String!) {
    removeTodo(id: $id)
  }
`;

const RemoveListModalComponent: React.FC<RemoveListProps> = props => {
  const [open, setOpen] = React.useState(false);

  const [removeTodo] = useMutation(REMOVE_TODO_LIST);

  const displayLimit = useContext(DisplayLimit)[0];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton size='small' className='delete-button' color='secondary' title='Remove list' aria-label='Remove list' component='span' onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <div className='modal-inner'>
          <h2>Are you sure you want to remove this list?</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              removeTodo({
                variables: { id: props.id },
                refetchQueries: [
                    {
                        query: GET_LIST_ITEMS,
                        variables: {
                            skip: 0,
                            limit: displayLimit
                        }
                    }
                ],
              });
              handleClose();
            }}>
            <Button type='reset' onClick={handleClose}>
              Cancel
            </Button>
            <Button type='submit'>Yes</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RemoveListModalComponent;
