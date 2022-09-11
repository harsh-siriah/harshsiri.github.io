import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProjectModal from "./components/Projects/ProjectModal";
import "./jQueryLoader";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ThemeContext, ThemeModes } from "./contexts/ThemeContext";
import Constants from "./constants/Constants";
import moment from "moment";

function App() {
  const storedTheme = localStorage.getItem(Constants.LocalStorage.CurrentTheme);

  //Setting prefered theme as the stored one or default to theme according to time of the day
  const selectedThemeMode = useRef(
    storedTheme
      ? storedTheme
      : moment().format("a") === "pm"
      ? ThemeModes.Dark
      : ThemeModes.Light
  );
  useEffect(() => {
    document.title = "Harsh Siriah Portfolio";
  }, []);

  const [theme, setTheme] = useState(selectedThemeMode.current);

  const toggleTheme = useCallback(() => {
    setTheme((currTheme) => {
      const newTheme =
        currTheme === ThemeModes.Dark ? ThemeModes.Light : ThemeModes.Dark;

      localStorage.setItem(Constants.LocalStorage.CurrentTheme, newTheme);
      return newTheme;
    });
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
