import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const addArticle = (title, body) => {
    setArticles([...articles, { title, body }]);
  };

  return <ArticlesContext.Provider value={[articles, setArticles]}>{children}</ArticlesContext.Provider>;
};
export default ArticlesContextProvider;
