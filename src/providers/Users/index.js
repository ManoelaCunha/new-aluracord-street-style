import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const getUser = (userName) => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(async (response) => {
        await setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ user, getUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
