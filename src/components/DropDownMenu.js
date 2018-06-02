import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDownMenu.css';

class DropDownMenu extends Component {
  static propTypes = {
    updateStoryForm: PropTypes.func.isRequired,
    titles: PropTypes.array.isRequired,
  }

  onSelect = (storyIndex) => {
    this.props.updateStoryForm(storyIndex);
  }

  render() {
    let titles = this.props.titles;
    let options = titles.map((title, index) => {
      return(<option key={index} value={index}>{title}</option>);
    });

    return (
      <select
        className="dropdown"
        onChange={(event) => {this.onSelect(event.target.value)}}
        >
        {options}
      </select>
    );
  }
}

export default DropDownMenu;
