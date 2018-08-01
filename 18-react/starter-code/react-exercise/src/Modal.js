import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render(){
    const { article } = this.props;
    return (
      <div className={`modal ${this.props.isOpen ? 'open' : ''}`}>
        <div className="modal-close-button" onClick={this.props.onClose}>X</div>
        <div className="modal-body">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a className="modal-read-more-link" href={article.url}>Read more</a>
        </div>
      </div>
    )
  }
}

export default Modal;
