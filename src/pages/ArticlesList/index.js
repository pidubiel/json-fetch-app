import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../contexts/ArticlesContext.js';
import SingleArticle from './SingleArticle';

const ArticlesList = () => {
  const { articles } = useContext(ArticlesContext);

  return (
    <div className='main-container'>
      <Link className='link' to='/'>
        Back to home
      </Link>
      <div className='articles'>
        {articles && articles.length > 0 && articles.map(el => <SingleArticle key={el.id} id={el.id} title={el.title} body={el.body} />)}
      </div>
    </div>
  );
};
export default ArticlesList;
