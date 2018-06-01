import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WordsInput.css';

class WordsInput extends Component {

  constructor() {
    super();

    this.state = {
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: '',
    };
  }

  static propTypes = {
    words: PropTypes.array.isRequired,
    updateWord: PropTypes.func.isRequired,

  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState(updatedState);
  }

  onSubmit = (event) => {
  event.preventDefault();

  // const madLibInfo = {
  //   adjective_1: this.state.adjective_1,
  //   adjective_2: this.state.adjective_2,
  //   noun_1: this.state.noun_1,
  //   noun_2: this.state.noun_2,
  // }

  this.props.updateWord('adjective_1', `test`);

  this.setState({
    adjective_1: '',
    adjective_2: '',
    noun_1: '',
    noun_2: '',
  });
}


  render() {
    return (
      <div>

      <div>
        <form  onSubmit={this.onSubmit}>
      <div>
      <p>
        <label htmlFor="adjective_1">adjective_1:</label>
        <input
        adjective_1 = "adjective_1"
        onChange={(event) => { this.onFieldChange('adjective_1', event.target.value)}}
        />
      </p>

      <p>
        <label htmlFor="adjective_2">adjective_2:</label>
        <input
        adjective_2 = "adjective_2"
        onChange={(event) => { this.onFieldChange('adjective_2', event.target.value)}}
        />
      </p>

      <p>
        <label htmlFor="noun_1">noun_1: </label>
        <input
        noun_1 = "noun_1"
        onChange={(event) => { this.onFieldChange('noun_1', event.target.value)}}
        />
      </p>

      <p>
        <label htmlFor="noun_2">noun_2: </label>
        <input
        noun_2 = "noun_2"
        onChange={(event) => { this.onFieldChange('noun_2', event.target.value)}}
        />
      </p>

      <input
      className="button success"
      type="submit"
      value="get MadLib"
      />
      </div>
      </form>
      </div>
      </div>
    );
  }
}

export default WordsInput;
