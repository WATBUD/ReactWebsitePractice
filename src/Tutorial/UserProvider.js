import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '初始化值John Doe',
    email: '初始化值john.doe@example.com',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
            ----------------UserProvider----------------
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
