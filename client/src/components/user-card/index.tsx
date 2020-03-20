import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import React from 'react';
import { useUserState } from '../../services/user.service';
import './user-card.component.scss';

function UserCard() {
  const user = useUserState();

  if (!user) {
    return <QuestionAnswer />;
  }

  return (
    <div className='user-card'>
      <Avatar>
        <AccountCircleIcon />
      </Avatar>
      <div className='user-card-content'>
        <div className='user-card-name'>
          {user?.name} {user?.lastName}
        </div>
        <div className='user-card-about'>{user?.role}</div>
      </div>
    </div>
  );
}

export default UserCard;
