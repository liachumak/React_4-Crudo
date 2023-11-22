import NavigationItem from '../NavigationItem/NavigationItem';
import './header.css';
import { UsersContext } from "../../App";
import { useContext } from 'react';

const Header = () => {
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

  const contextData = useContext(UsersContext);
  
  console.log(contextData);

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
       <div>Users count:{contextData.usersCount}</div>
     </header>
   );
 };
 
 export default Header;