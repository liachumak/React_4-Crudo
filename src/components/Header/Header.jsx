import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';
import { UsersContext } from "../../App";
import { useContext } from 'react';

const Header = () => {

  const contextData = useContext(UsersContext);

  const { usersCount, longestName } = useContext(UsersContext);

  const navElements = [
    {
      text: "First",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Second",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Third",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "samsung",
      isUppercasetext: true,
    },
  ];

  return (
    <header>
      {navElements.map((element) => {
        return (
          <NavigationItem
            key={element.text}
            text={element.text}
            isUppercasetext={element.isUppercasetext}
            description={element.description}
          />
        );
      })}
      <div>User Count: {usersCount}</div>
      <div>Longest Name: {contextData.longestName}</div>
    </header>
  );
};
 
 export default Header;