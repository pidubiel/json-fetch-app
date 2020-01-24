import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            articles: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    console.log(this.state.articles);
    return (
      <div className='main-container'>
        <Link className='link' to='/'>
          Back to home
        </Link>
        <div className='articles'>
          {this.state.articles.map(el => (
            <div className='articles__item' key={el.id}>
              <h1>{el.title}</h1>
              <p>{el.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ArticlesList;
