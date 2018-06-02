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
    setWords: PropTypes.func,
    submitStory: PropTypes.func
  }

  onFieldChange = (key, value) => {
    this.props.setWords(key, value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.submitStory();
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
