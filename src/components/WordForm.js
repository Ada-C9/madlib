import React, { Component } from 'react';
import PropTypes from 'prop-types';



class WordForm extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
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

export default WordForm;
