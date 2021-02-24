import React from 'react';
import Toolbar from './components/Toolbar';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import { GlobalStyles } from './themes/global';
import { useDarkMode } from './themes/useDarkMode';
import ArticlesPage from './pages/Articles';
import ArticlePage from './pages/Article';
import CategoryPage from './pages/Category';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';


const App = () => {  
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const themeClass = theme === 'light' ? "lightContent" : "darkContent";  

  return (
      <HelmetProvider>
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
      </HelmetProvider>

  );
};

export default App;
