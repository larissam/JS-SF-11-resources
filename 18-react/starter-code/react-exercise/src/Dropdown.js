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

  render() {
    const { options, placeholder } = this.props;
    const { isOpen, selectedIdx } = this.state;

    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-selected-item" onClick={() => this.handleDropdownOpen()}>
          { options[selectedIdx] ? options[selectedIdx].label : placeholder }
        </div>
        <div className="dropdown-options">
          { options.map((option, idx) => (
            <div className="dropdown-option" key={`dropdown-${idx}`} onClick={() => this.handleSelectionUpdate(idx) }>{ option.label }</div>
          ))}
        </div>
      </div>
    );
  }

  handleDropdownOpen() {
    this.setState({ isOpen: true });
  }

  handleSelectionUpdate(idx) {
    const { onSelectItem, options } = this.props;

    this.setState({ isOpen: false, selectedIdx: idx }, () => {
      onSelectItem(options[idx], idx);
    });
  }
}

export default Dropdown;
