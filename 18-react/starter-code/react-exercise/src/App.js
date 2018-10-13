import React, { Component } from 'react';
import './App.css';

import Header from './Header.js';
import Article from './Article.js';
import Modal from './Modal.js';

import NewsService, { newsSources } from './NewsService.js';

import { isEmpty } from './utils.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNewsSource: undefined,
      articles: [],
      selectedArticle: {}
    }
  }

  render() {
    const { articles, selectedArticle, selectedNewsSource } = this.state;
    return (
      <div className="App">
        <Header
          onSelectNewsSource={(newsSource) => this.handleNewsSourceSelect(newsSource)}
          selectedNewsSource={selectedNewsSource}
          newsSources={newsSources}
        />
        <div className="main">
          {articles.map((article, idx) => (
            <Article
              key={`article-${idx}`}
              onClick={() => this.handleArticleSelect(article)}
              title={article.title}
              source={article.source}
              thumbnail={article.thumbnail}
            />
          ))}
        </div>
        <Modal
          isOpen={ !isEmpty(selectedArticle) }
          onClose={() => this.handleArticleSelect({})}
          article={ selectedArticle }
        />
      </div>
    );
  }

  handleArticleSelect(article) {
    this.setState({
      selectedArticle: article
    });
  }

  handleNewsSourceSelect(newsSource) {
    this.setState({
      selectedNewsSource: newsSource
    }, () => {
      NewsService.get(newsSource.id, {}, (articles) => {
        this.setState({ articles: articles });
      })
    });
  }
}

export default App;
