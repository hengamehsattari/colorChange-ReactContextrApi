import React, { useState } from "react";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import { createContext } from "react";

export const Context = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      <main className={theme}>
        <Navbar />
        <Articles />
      </main>
    </Context.Provider>
  );
};

export default App;
