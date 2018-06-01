import React, { Component } from 'react';
import './MadLibForm.css';
import WordInput from './WordInput.js'
import PropTypes from 'prop-types';

class MadLibForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: {}
    }
  }

  static propTypes = {
    wordTypes: PropTypes.arrayOf( PropTypes.object.isRequired ).isRequired,
    setWords: PropTypes.func
  }

  onFieldChange = (key, value) => {
    const updatedWords = this.state.words;
    updatedWords[key] = value;

    this.setState(updatedWords);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.setWords(this.state.words);
  };

  render() {
    const inputComponents = this.props.wordTypes.map((wordType) => {
      return(
        <WordInput
          key={wordType.key}
          wordKey={wordType.key}
          label={wordType.label}
          onFieldChange={this.onFieldChange}
        />
      );
    });

    return(
      <form onSubmit={ this.onFormSubmit }>
        { inputComponents }
        <input type="submit" />
      </form>
    )
  }

}

export default MadLibForm;
