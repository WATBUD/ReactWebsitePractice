import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
