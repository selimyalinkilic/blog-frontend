import React from 'react'
import Toolbar from './components/Toolbar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';
import { useDarkMode } from './themes/useDarkMode';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeClass = theme === 'light' ? "lightContent" : "darkContent";
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className={themeClass + " App"}>
        <Toolbar toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  )
}

export default App
