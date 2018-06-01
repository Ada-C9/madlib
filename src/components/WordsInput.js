import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WordsInput.css';

class WordsInput extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
    updateWord: PropTypes.func.isRequired,

  }

  render() {
    return (
      <div>

      <div>
        <form  onSubmit={ this.onSubmit } className="new-student-form">
          <div>
            <p>
              <label htmlFor="adjective_1">adjective_1:</label>
              <input
                adjective_1 = "adjective_1"
                onChange={(event) => { this.onFieldChange('adjective_1', event.target.value)}}
                value=''
                />
            </p>

            <p>
              <label htmlFor="adjective_2">adjective_2:</label>
              <input
                adjective_2 = "adjective_2"
                onChange={(event) => { this.onFieldChange('adjective_2', event.target.value)}}
                value=''
                />
            </p>

            <p>
              <label htmlFor="noun_1">noun_1: </label>
              <input
                noun_1 = "noun_1"
                onChange={(event) => { this.onFieldChange('noun_1', event.target.value)}}
                value=''
                />
            </p>

            <p>
              <label htmlFor="noun_2">noun_2: </label>
              <input
                noun_2 = "noun_2"
                onChange={(event) => { this.onFieldChange('noun_2', event.target.value)}}
                value=''
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
        {this.props.words}
        {this.props.updateWord}
      </div>
    );
  }
}

export default WordsInput;
