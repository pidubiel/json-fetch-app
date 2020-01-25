import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles, error }) => {
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
            </div>
          ))}
      </div>
    </div>
  );
};
export default ArticlesList;
