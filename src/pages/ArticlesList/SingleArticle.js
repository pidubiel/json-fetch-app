import React, { useContext } from 'react';
import { ArticlesContext } from '../../contexts/ArticlesContext.js';

const SingleArticle = ({ id, title, body }) => {
  const [articles, setArticles, removeArticle] = useContext(ArticlesContext);
  return (
    <div className='articles__item'>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => removeArticle(id)} className='articles__btn'>
        Remove article
      </button>
    </div>
  );
};

export default SingleArticle;
