import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
    );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:3000/api/auth/login", inputs, {
      withCredentials:true
    });
    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);


  // const saveUser = async () => {
  //     await axios.get("http://localhost:3001/api/auth/user")
  //     .then((res) => {
  //         setCurrentUser(res.data)
  //     })
  // };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// export { AuthContext, AuthContextProvider }