import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MadLibs from './../madlibs/MadLibs.js';

class Dropdown extends Component {
  static propTypes = {
    selectMadLibCallback: PropTypes.func.isRequired,
    selectedMadLibTitle: PropTypes.string.isRequired,
    toggleStoryCallback: PropTypes.func.isRequired
  };

  selectStory = (event) => {
    this.props.selectMadLibCallback(event.target.value);
    this.props.toggleStoryCallback();
  }

  render() {
    const info = MadLibs.map((story, key) => {
      return <option key={key} value={story.title}>{story.title}</option>
    });

    return (
      <section onChange={ this.selectStory }>
        <select defaultValue={this.props.selectedMadLibTitle} >
          { info }
        </select>
      </section>
    );
  }
}

export default Dropdown;
