import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './styles/index.scss';
import { ArticlesList, AddArticle, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/articles-list' component={ArticlesList} />
        <Route path='/add-article' component={AddArticle} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
