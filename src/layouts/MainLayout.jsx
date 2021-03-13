import React from "react";
import { ThemeProvider } from "styled-components";
import Toolbar from "../components/Toolbar";
import { lightTheme, darkTheme } from "../themes/theme";
import { useDarkMode } from "../themes/useDarkMode";
import { GlobalStyles } from "../themes/global";

const MainLayout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const themeClass = theme === "light" ? "lightContent" : "darkContent";
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className={themeClass + " App"}>
        <Toolbar toggleTheme={toggleTheme} />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
