import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../contexts/ArticlesContext.js';
import axios from 'axios';

const ArticlesList = () => {
  const [articles, setArticles] = useContext(ArticlesContext);
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
      console.log('fetching');
    }
  }, []);
  return (
    <div className='main-container'>
      <Link className='link' to='/'>
        Back to home
      </Link>
      <div className='articles'>
        {error && <p>{error.message}</p>}
        {!error &&
          articles &&
          articles.length > 0 &&
          articles.map(el => (
            <div className='articles__item' key={el.id}>
              <h1>{el.title}</h1>
              <p>{el.body}</p>
              <button className='articles__btn'>Remove article</button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ArticlesList;
