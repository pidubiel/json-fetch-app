import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../contexts/ArticlesContext.js';
import SingleArticle from './SingleArticle';
import axios from 'axios';

const ArticlesList = () => {
  const [articles, setArticles, removeArticle] = useContext(ArticlesContext);
  const [error, setError] = useState(null);
  const fetchArticles = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setArticles(res.data.filter(el => el.id <= 5)))
      .catch(err => setError(err));
  };

  useEffect(() => {
    if (articles.length == 0) {
      fetchArticles();
    }
  }, []);
  return (
    <div className='main-container'>
      <Link className='link' to='/'>
        Back to home
      </Link>
      <div className='articles'>
        {error && <p>{error.message}</p>}
        {!error && articles && articles.length > 0 && articles.map(el => <SingleArticle key={el.id} id={el.id} title={el.title} body={el.body} />)}
      </div>
    </div>
  );
};
export default ArticlesList;
