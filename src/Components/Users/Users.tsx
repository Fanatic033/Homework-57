import UserItem from './UserItem.tsx';
import {User} from '../../../types.ts';
import React from 'react';
interface Props {
  users: User[];
}
const Users:React.FC<Props> = ({users}) => {
  return (
    <>
      <h3>Users</h3>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </>
  );
};

export default Users;