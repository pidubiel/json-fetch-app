import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const addArticle = (title, body, id) => {
    setArticles([...articles, { title, body, id }]);
  };
  const removeArticle = id => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return <ArticlesContext.Provider value={{ articles, setArticles, addArticle, removeArticle }}>{children}</ArticlesContext.Provider>;
};
export default ArticlesContextProvider;
