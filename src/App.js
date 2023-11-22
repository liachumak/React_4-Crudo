import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
/*import { Routes, Route} from "react-router-dom"*/

import { createContext, useState } from 'react';

export const UsersContext = createContext();


/*const UsersContext = createContext();*/


const App = () => {
   const [usersCount, setUsersCount] = useState(0);

   
   
  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }} >
    <div className="App">
      <Header /*usersCount={usersCount}*/ />
      <Main/>
      <Footer />
    </div>
    </UsersContext.Provider>
  );
};

export default App;