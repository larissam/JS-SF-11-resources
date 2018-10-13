import React, { PureComponent } from 'react';
import './Modal.css';

class Modal extends PureComponent {
  render(){
    const { article, isOpen, onClose } = this.props;
    const { title, description, url } = article;
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-close-button" onClick={onClose}>X</div>
        <div className="modal-body">
          <h2>{title}</h2>
          <p>{description}</p>
          <a className="modal-read-more-link" href={url}>Read more</a>
        </div>
      </div>
    )
  }
}

export default Modal;
