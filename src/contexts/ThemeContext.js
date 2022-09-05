import React, { useContext } from "react";

export const ThemeModes = {
  Light: "light",
  Dark: "dark",
};

export const ThemeContext = React.createContext({
  mode: ThemeModes.Dark,
  toggleTheme() {},
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
