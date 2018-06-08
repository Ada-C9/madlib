import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WordsInput.css';

class WordsInput extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
    updateMadLib: PropTypes.func.isRequired
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.words.forEach((word) => {
      this.props.updateMadLib(word.key, this.state[word.key]);
    });
  }

  render() {
    return (
      <form  onSubmit={this.onSubmit}>
        {this.props.words.map((word) => {
          return (
            <p key={word.key}>
              <label htmlFor={word.key}>{word.label}:</label>
              <input
              id={word.key} type="text"
              onChange={(event) => { this.onFieldChange(word.key, event.target.value)}}
              />
            </p>
          );
        })}

        <input
        className="button success"
        type="submit"
        value="get MadLib"
        />
      </form>
    );
  }
}

export default WordsInput;
