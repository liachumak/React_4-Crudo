
import Input from "../Input";
import UserCard from "../UserCard/UserCard";

import { v4 as getUniqueId } from 'uuid';
import { useContext,useState } from "react";
import { UsersContext } from "../../App";

import styles from "./registrationForm.module.css";

const DEFAULT_USERS = [
  {
    name: 'John',
    surname: 'Nollan',
    email: 'john@gmail.com',
    id: getUniqueId(),
  },
  {
    name: 'Harry',
    surname: 'Potter',
    email: 'harry@mail.com',
    id: getUniqueId(),
  },
  {
    name: 'Pedro',
    surname: 'Lopes',
    email: 'pedro@gmail.com',
    id: getUniqueId(),
  },
  {
    name: 'Taras',
    surname: 'Rafff',
    email: 'rafael@gmail.com',
    id: getUniqueId(),
  },
];

const RegistrationForm = () => {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const [isEditMode, setIsEditMode] = useState(false); 
  const [selectedUserId, setSelectedUserId] = useState(); 

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const onAddUser = () => {
    if (isEditMode) {
      setUsers((prevUsers) =>
        prevUsers.reduce((updatedUsers, user) => {
          if (user.id === selectedUserId) {
            updatedUsers.push({ ...user, name, surname, email });
          } else {
            updatedUsers.push(user);
          }
          return updatedUsers;
        }, [])
      );
    
      setIsEditMode(false);
      setSelectedUserId(null);
    }
    else {
      const user = {
        name,
        surname,
        email,
        id: getUniqueId(),
      };

      setUsers([...users, user]);
    }

    setName('');
    setSurname('');
    setEmail('');
  };

  const onGetName = (value) => {
    setName(value);
  };

  const onGetSurname = (value) => {
    setSurname(value);
  };

  const onGetEmail = (value) => {
    setEmail(value);
  };

  const onDeleteUserHandler = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const onUpdateUserHandler = (id) => {
    const currentUser = users.find((user) => user.id === id);

    setName(currentUser.name);
    setSurname(currentUser.surname);
    setEmail(currentUser.email);

    setIsEditMode(true); 
    setSelectedUserId(id);
  };

  return (
    <div className={styles['common']}>
      <div className={styles['left-side']}>
        <Input
          label="Name: "
          placeholder="Enter Your Name"
          onChangeFunction={onGetName}
          value={name}
        />
        <Input
          label="Surname: "
          placeholder="Enter Your Surname"
          onChangeFunction={onGetSurname}
          value={surname}
        />
        <Input
          label="Email: "
          placeholder="Enter Your Email"
          onChangeFunction={onGetEmail}
          value={email}
        />
        {isEditMode ? (
          <button
            type="button"
            onClick={onAddUser}
            className={styles['add-user-button']}
          >
            Save User
          </button>
        ) : (
          <button
            type="button"
            onClick={onAddUser}
            className={styles['add-user-button']}
          >
            Add User
          </button>
        )}
      </div>
      <div className={styles['right-side']}>
        <div className={styles['users-list']}>
          {users.map((user, index) => {
            const { name, surname, email, id } = user;
            return (
              <UserCard
                key={index}
                name={name}
                surname={surname}
                email={email}
                id={id}
                onClickDeleteBtn={onDeleteUserHandler}
                onClickUpdateBtn={onUpdateUserHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default RegistrationForm;