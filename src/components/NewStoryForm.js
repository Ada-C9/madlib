import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewStoryForm.css';

class NewStoryForm extends Component {

  static propTypes = {
      updateWord: PropTypes.func.isRequired,
      words: PropTypes.array.isRequired,
    }

  onFieldChange = (key, value) => {
    this.props.updateWord(key, value);
  }

  render() {
    let words = this.props.words;
    let wordInput = words.map((word) => {
          return(
            <section key={word.key}>
              <label>{word.label}</label>
              <input
               name={word.key}
               onChange={(event) => { this.onFieldChange(word.key, event.target.value) }}
               />
            </section>
          );
        });

        return (
      <section>
        <form  className="new-story-form">
          {wordInput}
          <input type="submit" />
        </form>
      </section>
    );
  }
}



export default NewStoryForm;
