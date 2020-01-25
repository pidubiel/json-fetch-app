import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import { ArticlesList, AddArticle, Home } from './pages';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  const fetchArticles = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setArticles(res.data.filter(el => el.id <= 10)))
      .catch(err => setError(err));
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/articles-list'>
          <ArticlesList articles={articles} error={error} />
        </Route>
        <Route path='/add-article' component={AddArticle} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
