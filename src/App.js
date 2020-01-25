import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import { ArticlesList, AddArticle, Home } from './pages';
import ArticlesContextProvider from './contexts/ArticlesContext.js';

const App = () => {
  return (
    <ArticlesContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/articles-list'>
            <ArticlesList />
          </Route>
          <Route path='/add-article' component={AddArticle} />
        </Switch>
      </BrowserRouter>
    </ArticlesContextProvider>
  );
};

export default App;
