import React from 'react';
import {User} from '../../../types.ts';

interface Props{
  user: User;
}
const UserItem:React.FC<Props> = ({user}) => {
  return (
    <div>
      <div className="card mb-2">
        <div className="row g-0">
          <div className="col-sm">
            <div className="card-body">
              <h5 className="card-title">Имя Пользователя: {user.name}</h5>
              <p className="card-text small">Почта: {user.email}</p>
              <p className="card-text">Активен {user.active}</p>
              <p className="card-text">Роль: {user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;