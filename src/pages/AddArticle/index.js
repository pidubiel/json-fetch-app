import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../contexts/ArticlesContext.js';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addArticle } = useContext(ArticlesContext);
  const handleSubmit = e => {
    e.preventDefault();
    addArticle(title, content);
    setTitle('');
    setContent('');
  };
  return (
    <div className='main-container'>
      <Link className='link' to='/'>
        Back to home
      </Link>
      <div className='form-wrapper'>
        <form onSubmit={e => handleSubmit(e)} action='' className='article-form'>
          <div className='article-form__group'>
            <label className='article-form__label' htmlFor='title'>
              Title
            </label>
            <input value={title} onChange={e => setTitle(e.target.value)} className='article-form__input' type='text' id='title' />
          </div>
          <div className='article-form__group'>
            <label className='article-form__label' htmlFor='body'>
              Content
            </label>
            <textarea value={content} onChange={e => setContent(e.target.value)} className='article-form__textarea' id='body' />
          </div>
          <input type='submit' value='Add article' />
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
