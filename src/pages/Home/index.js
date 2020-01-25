import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../contexts/ArticlesContext.js';
import axios from 'axios';

const Home = () => {
  const { articles, setArticles } = useContext(ArticlesContext);

  const [error, setError] = useState(null);
  const fetchArticles = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setArticles(res.data.filter(el => el.id <= 5)))
      .catch(err => setError(err));
  };

  useEffect(() => {
    if (articles && articles.length == 0) {
      fetchArticles();
    }
  }, []);
  return (
    <div className='home'>
      <ul className='home__list'>
        <li className='home__element'>
          <Link to='/articles-list'>Articles List</Link>
        </li>
        <li className='home__element'>
          <Link to='/add-article'>Add Article</Link>
        </li>
      </ul>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Home;
