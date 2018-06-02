import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MadLibs from './../madlibs/MadLibs.js';

class Dropdown extends Component {
  static propTypes = {
    selectMadLibCallback: PropTypes.func.isRequired,
    selectedMadLib: PropTypes.string.isRequired,
  };

  selectStory = (event) => {
    console.log(event.target.value);
    this.props.selectMadLibCallback(event.target.value);
  }

  render() {
    const info = MadLibs.map((story, key) => {
      return <option key={key} value={story.title}>{story.title}</option>
    });

    return (
      <section onChange={ this.selectStory }>
        <select defaultValue={this.props.selectedMadLib} >
          { info }
        </select>
      </section>
    );
  }
}

export default Dropdown;
