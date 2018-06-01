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
    wordTypes: PropTypes.arrayOf( PropTypes.object.isRequired ).isRequired
  }

  onSubmit = (event) => {
    event.preventDefault();
  };

  onFieldChange = (key, value) => {
    const updatedWords = this.state.words;
    updatedWords[key] = value;

    this.setState(updatedWords);
  }

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
      <form onSubmit={ this.onSubmit }>
        { inputComponents }
        <input type="submit" />
      </form>
    )
  }

}

export default MadLibForm;
