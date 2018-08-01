import React, { Component } from 'react';
import './Header.css'

import Dropdown from './Dropdown.js';

class Header extends Component {
  render() {
    const { newsSources, onSelectNewsSource, selectedNewsSource } = this.props;
    return (
      <div className="header">
        <h1>Feedr</h1>
        <Dropdown
          options={newsSources}
          onSelectItem={onSelectNewsSource}
          selectedItem={selectedNewsSource}
          placeholder='News source'
        />
      </div>
    );
  }
}

export default Header;
