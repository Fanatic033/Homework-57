import './App.css';
import UserForm from './Components/UserForm/UserForm.tsx';
import Users from './Components/Users/Users.tsx';
import {useState} from 'react';
import {User} from '../types.ts';

function App() {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name : ' ilzat',
      email: 'izladsa',
      role : '',
      active : false,
    },{
      id: '2',
      name : ' ilzat',
      email: 'izladsa',
      role : '',
      active : false,
    },
  ]);
  const AddUser = (user: User) => {
    setUsers(prevState => [...prevState, user]);
  }
  return (
    <div className="container-fluid">
      <div className="row mt-2 justify-content-center">
        <div className="col-4">
          <UserForm onSubmit={AddUser}/>
        </div>
        <div className="col-4">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
