import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import Main from './components/Main';
import RegistrationForm from './components/RegistrationForm';
import { createContext, useState, useEffect } from 'react';

export { UsersContext };

const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [longestName, setLongestName] = useState('');

  useEffect(() => {
    const defaultUserNames = [
      'John Nollan',
      'Nick Rozberg',
      'Anna Lee',
      'Rafael Rafff',
    ];

    const defaultLongestName = defaultUserNames.reduce((longest, name) => {
      return name.trim().length > longest.trim().length ? name.trim() : longest.trim();
    }, '');

    setLongestName(defaultLongestName);
  }, []); 

  const contextValue = {
    usersCount,
    longestName,
    setUsersCount,
    setLongestName,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      <Header />
      <RegistrationForm />
      <Footer />
    </UsersContext.Provider>
  );
};

export default App;
