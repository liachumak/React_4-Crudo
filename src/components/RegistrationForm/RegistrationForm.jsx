import classNames from "classname";
import { isEmpty } from "lodash";

import Input from "../Input";
import UserCard from "../UserCard/UserCard";

import { v4 as getUniqueId } from 'uuid';
import { useContext, useState, useEffect} from "react";
import { UsersContext } from "../../App";

import styles from "./registrationForm.module.css";

const DEFAULT_USERS = [
  {
    name: 'John',
    surname: 'Nollan',
    email: 'john@gmail.com',
    id: getUniqueId()
  },
  {
    name: 'Nick',
    surname: 'Rozberg',
    email: 'nick',
    id: getUniqueId()
  },
  {
    name: 'Anna',
    surname: 'Lee',
    email: 'anna@gmail.com',
    id: getUniqueId()
  },
  {
    name: 'Rafael',
    surname: 'Rafff',
    email: 'rafael@gmail.com',
    id: getUniqueId()
  },
];

const RegistrationForm = () => {
  const contextData = useContext(UsersContext);

  const [users, setUsers] = useState(DEFAULT_USERS);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState(false); 
  const [isEditMode, setIsEditMode] = useState(false); 

  useEffect(() => {
    contextData.setUsersCount(users.length);
  }, [users, contextData.setUsersCount]);

  const onAddUser = () => {
    const user = {
      name,
      surname,
      email,
      id: getUniqueId(),
    };

    setUsers((prevUsers) => [...prevUsers, user]);

    if (isEmpty(name) || isEmpty(surname) || isEmpty(email)) {
      setErr(true);
    }

      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, user];
        contextData.setUsersCount(updatedUsers.length);
  
        const fullName = `${name} ${surname}`;
        contextData.setLongestName((prevLongestName) =>
          fullName.trim().length > prevLongestName.trim().length ? fullName.trim() : prevLongestName.trim()
        );
  
        return updatedUsers;
      });
  
      if (isEmpty(name) || isEmpty(surname) || isEmpty(email)) {
        setErr(true);
      } else {
        setErr(false);
      }

      setName('');
      setSurname('');
      setEmail('');
    };

  const leftSideClassName = classNames(
    styles['left-side'],
     {
      [styles['border-red']]: err,
    },
  );


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
      setUsers(filteredUsers)  
  };

  const onUpdateUserHandler = (id) => {
    const currentUser = users.filter((user) => user.id === id)[0];
  
    setName(currentUser.name);
    setSurname(currentUser.surname);
    setEmail(currentUser.email);
  };


  return (
    <div className={styles['common']}>
      <div className={leftSideClassName}>
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
        {
          isEditMode ? (
            <button type="button" onClick={onAddUser} className={styles['add-user-button']}>
              Update User
            </button>
          ) : (
            <button type="button" onClick={onAddUser} className={styles['add-user-button']}>
               Add User
            </button>
          )
        }
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