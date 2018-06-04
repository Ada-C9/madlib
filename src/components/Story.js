import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Story.css';

class Story extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    words: PropTypes.array.isRequired
  }

  constructor(props) {
    super();
    this.state = {
      words: props.selectedMadLib
    }
  }

  render() {
    return (
      <section className="story">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.text }</p>
      </section>
    );
  }
}

export default Story;
