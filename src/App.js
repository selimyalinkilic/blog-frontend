import React from 'react';
import ArticlesPage from './pages/Articles';
import ArticlePage from './pages/Article';
import CategoryPage from './pages/Category';
import { Switch, Route } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './assets/css/style.css';
import NotFound_404 from './layouts/NotFound_404';

dotenv.config();

const App = () => {    
  return (           
    <HelmetProvider>        
      <Switch>
        <Route path='/' component={ArticlesPage} exact />
        <Route path='/article/:id/:title' component={ArticlePage} exact />
        <Route path='/category/:id/:name' component={CategoryPage} />
        <Route component={NotFound_404} />
      </Switch>             
    </HelmetProvider>
  );
};

export default App;
