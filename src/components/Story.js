import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm.js';

import './Story.css';

class Story extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section className="story">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.text }</p>
        <StoryForm/>
      </section>

    );
  }
}

export default Story;
