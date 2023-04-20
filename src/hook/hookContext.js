import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const updateUser = (name, email) => {
    setUser({ name, email });
  };
//定義了 user 和 updateUser 狀態變數將它們與 UserContext 打包 使用 UserContext.Provider  傳遞給UserProfile/UserForm
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <div>
        <UserProfile />
        <UserForm />
      </div>
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { updateUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
