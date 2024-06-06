import {User, UserMutation} from '../../../types.ts';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userMutation, setUserMutation] = useState<UserMutation>(
    {
      name: '',
      email: '',
      active: false,
      role: '',
    });
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...userMutation,
    });
    setUserMutation({
      name: '',
      email: '',
      active: false,
      role: '',
    });
  };

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserMutation(prevState => ({...prevState, [e.target.name]: e.target.value}));
  };
  return (
    <form onSubmit={formSubmit}>
      <h5>Add User</h5>
      <div className="form-group mb-3">
        <label htmlFor="name">Username</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={changeUser}
          value={userMutation.name}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Mail</label>
        <input
          required
          type="text"
          name="email"
          id="email"
          className="form-control"
          onChange={changeUser}
          value={userMutation.email}
        />
      </div>
      <div className="form-check mb-3">
        <label className="form-check-label" htmlFor="check">Active</label>
        <input type="checkbox" className="form-check-input" id="check"/>
      </div>
      <select className="form-select"
              required
              name="role"
              id="role"
              onChange={changeUser}
              value={userMutation.role}
      >
        <option value="1">Пользователь</option>
        <option value="2">Редактор</option>
        <option value="3">Администратор</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;