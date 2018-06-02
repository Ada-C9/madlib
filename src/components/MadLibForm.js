import React, { Component } from 'react';
import FormField from './FormField';
import PropTypes from 'prop-types';
import './MadLibForm.css';

class MadLibForm extends Component {
  constructor(props) {
    super(props);
    this.state = { words: this.props.words };
  }

  static propTypes = { updateWord: PropTypes.func.isRequired };

  onFieldChange = (index, value) => {
    const words = this.state.words;
    words[index].value = value;
    this.setState({ words, });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.hasCompletedMadLib()) {
      this.state.words.map((word) => { return this.props.updateWord(word.key, word.value) });
    }
  };

  hasCompletedMadLib = () => { return this.state.words.every(this.hasInput) };

  hasInput(inputField) { return inputField.value !== undefined && inputField.value.match(/\w+?/) }

  render() {
    const formFields = this.state.words.map((word, index) => {
      return (
        <FormField key={ word.key }
                   onFieldChange={ this.onFieldChange }
                   formLabel={ word.label }
                   index={ index }
        />
      );
    });

    return (
      <section className="madlib-form">
        <h4>Fill in all of the choices to see your final story.</h4>
        <form onSubmit={ this.onSubmit }>
          {formFields}
          <input
            className="button"
            type="submit"
            value="MadLib Me!"
          />
        </form>
      </section>
    );
  }
}

export default MadLibForm;
