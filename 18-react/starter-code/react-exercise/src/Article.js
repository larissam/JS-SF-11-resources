import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    const { title, source, thumbnail, onClick } = this.props;
    return (
      <div className="article" onClick={onClick}>
        <img className="article-thumbnail" src={ thumbnail } />
        <div className="article-info">
          <h2 className="article-title">
            { title }
          </h2>
          <h3 className="article-source">
            { source }
          </h3>
        </div>
      </div>
    )
  }
}

export default Article;
