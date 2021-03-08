import React from 'react';
import Toolbar from './components/Toolbar';
import ArticlesPage from './pages/Articles';
import ArticlePage from './pages/Article';
import CategoryPage from './pages/Category';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';
import { useDarkMode } from './themes/useDarkMode';
import dotenv from 'dotenv';
import './App.css';

dotenv.config();

const App = () => {  
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeClass = theme === 'light' ? "lightContent" : "darkContent";  
  
  return (                
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />          
      <div className={themeClass + " App"}>
        <Toolbar toggleTheme={toggleTheme} />
        <Switch>
          <Route path='/' component={ArticlesPage} exact />
          <Route path='/article/:id/:title' component={ArticlePage} exact />
          <Route path='/category/:id/:name' component={CategoryPage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
