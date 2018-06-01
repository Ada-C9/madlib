import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewStoryForm.css';

class NewStoryForm extends Component {

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
    words: PropTypes.array.isRequired,
    changeStoryVisibility: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    this.props.updateWord(key, value);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.changeStoryVisibility();
  }

  render() {
    let words = this.props.words;
    let inputs = words.map((word) => {
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
        <form
          className="new-story-form"
          onSubmit={this.onSubmit}
        >
          {inputs}
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default NewStoryForm;
