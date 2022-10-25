import { createContext, useState } from "react";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";

export const Context = createContext();

function App() {
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
}

export default App;
