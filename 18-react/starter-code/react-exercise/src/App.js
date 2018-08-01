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

  onSelectNewsSource(newsSource) {
    this.setState({
      selectedNewsSource: newsSource
    }, () => {
      NewsService.get(newsSource.id, {}, (articles) => {
        this.setState({ articles: articles });
      })
    });
  }

  onSelectArticle(article) {
    this.setState({
      selectedArticle: article
    });
  }

  render() {
    const { articles, selectedArticle } = this.state;
    return (
      <div className="App">
        <Header
          onSelectNewsSource={(newsSource) => this.onSelectNewsSource(newsSource)}
          selectedNewsSource={this.state.selectedNewsSource}
          newsSources={newsSources}
        />
        <div className="main">
          {articles.map((article, idx) => (
            <Article
              key={`article-${idx}`}
              onClick={() => this.onSelectArticle(article)}
              title={article.title}
              source={article.source}
              thumbnail={article.thumbnail}
            />
          ))}
        </div>
        <Modal
          isOpen={ !isEmpty(selectedArticle) }
          onClose={() => this.onSelectArticle({})}
          article={ selectedArticle }
        />
      </div>
    );
  }
}

export default App;
