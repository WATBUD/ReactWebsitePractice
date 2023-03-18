import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleButtonClick = () => {
    setUser({ name: 'Jane Doe', email: 'jane.doe@example.com' });
  };

  return (
    <div>
      ----------------UserProfile----------------
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleButtonClick}>Change User</button>
    </div>
  );
};

export default UserProfile;
