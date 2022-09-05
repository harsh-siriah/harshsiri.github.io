import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProjectModal from "./components/Projects/ProjectModal";
import "./jQueryLoader";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext, ThemeModes } from "./contexts/ThemeContext";

function App() {
  useEffect(() => {
    document.title = "Harsh Siriah Portfolio";
  }, []);

  const [theme, setTheme] = useState(ThemeModes.Dark);

  const toggleTheme = useCallback(() => {
    setTheme((currTheme) =>
      currTheme === ThemeModes.Dark ? ThemeModes.Light : ThemeModes.Dark
    );
  }, []);

  const MemoizedValue = useMemo(() => {
    const value = {
      mode: theme,
      toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      <div className="App" id={theme}>
        <HomeScreen />
        <ProjectModal />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
