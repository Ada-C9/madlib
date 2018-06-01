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

  seeObject = () => {
    console.log(this.props.wordTypes)
  }

  onSubmit = () => {

  };

  render() {
    const inputComponents = this.props.wordTypes.map((wordType) => {
      return(
        <WordInput
          key={wordType.key}
          wordKey={wordType.key}
          label={wordType.label}
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
