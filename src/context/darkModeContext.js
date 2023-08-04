import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const darkModeTest = JSON.parse(localStorage.getItem("darkMode"))
    if (darkModeTest) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};