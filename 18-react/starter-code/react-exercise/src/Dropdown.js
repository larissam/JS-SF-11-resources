import React, { Component } from 'react';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedIdx: undefined,
    };
  }

  openDropdown() {
    this.setState({ isOpen: true });
  }

  updateSelection(idx) {
    const { onSelectItem, options } = this.props;

    this.setState({ isOpen: false, selectedIdx: idx }, () => {
      onSelectItem(options[idx], idx);
    });
  }

  render() {
    const { options, placeholder } = this.props;
    const { isOpen, selectedIdx } = this.state;

    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-selected-item" onClick={() => this.openDropdown()}>{ options[selectedIdx] ? options[selectedIdx].label : placeholder }</div>
        <div className="dropdown-options">
          { options.map((option, idx) => (
            <div className="dropdown-option" key={`dropdown-${idx}`} onClick={() => this.updateSelection(idx) }>{ option.label }</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dropdown;
