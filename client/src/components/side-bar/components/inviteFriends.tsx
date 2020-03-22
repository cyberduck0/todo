import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import './inviteFriends.scss';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const InviteFriends = () => {
  const [showModal, setShowModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');

  const ADD_INVITE_EMAIL = gql`
    mutation addInviteEmail($user: String, $inviteEmail: String) {
      addInviteEmail(user: $user, inviteEmail: $inviteEmail) {
        id
        inviteEmail
      }
    }
  `;
  const [addInviteEmail] = useMutation(ADD_INVITE_EMAIL);

  return (
    <>
      <div
        className='add-user-box'
        onClick={() => {
          setShowModal(!showModal);
        }}>
        <p>Invite Friend</p>
        <div className='add-user-icon'>
          <PersonAddIcon />
        </div>
      </div>
      <Dialog
        open={showModal}
        onClose={() => {
          setShowModal(!showModal);
        }}
        aria-labelledby='form-dialog-title'>
        <form
          onSubmit={e => {
            e.preventDefault();
            addInviteEmail({
              variables: {
                user: 'userId',
                inviteEmail,
              },
            });
          }}>
          <DialogTitle id='form-dialog-title'>Add friend</DialogTitle>
          <DialogContent>
            <DialogContentText>To add your friend, please enter his or her email address here.</DialogContentText>

            <TextField
              autoFocus={true}
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              fullWidth={true}
              onChange={e => {
                setInviteEmail(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setShowModal(!showModal);
              }}
              color='primary'>
              Cancel
            </Button>
            <Button type='submit' color='primary'>
              Send invitation
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default InviteFriends;
