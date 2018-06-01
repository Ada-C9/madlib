import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WordsInput.css';

class WordsInput extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
  }


  render() {
    return (
      <div>
        {`this is the array of words: ${this.props.wordsArray}`}
      </div>
    );
  }
}

export default WordsInput;
