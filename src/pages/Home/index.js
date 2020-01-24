import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
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
      </div>
    );
  }
}

export default Home;
