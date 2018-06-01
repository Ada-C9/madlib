import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form.js'

import './Story.css';

class Story extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  constructor() {
    super();

  }

  render() {
    return (
      <section className="story">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.text }</p>
        {<Form />}
      </section>
    );
  }
}

export default Story;
