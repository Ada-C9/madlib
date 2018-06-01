import React, { Component } from 'react';
import FormField from './FormField';
import PropTypes from 'prop-types';
import './MadLibForm.css';

class MadLibForm extends Component {
  constructor(props) {
    super(props);
    this.state = {words: this.props.words};
  }

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
  };

  onFormFieldChange = (index, value) => {
    const updatedWords = this.state.words;
    updatedWords[index].value = value;
    this.setState({words: updatedWords});
    console.log(`Updated = ${index} ${value}`);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.state.words.map((word) => { return this.props.updateWord(word.key, word.value) });
  };

  render() {
    const formFields = this.state.words.map((word, index) => {
      return (
        <FormField key = {word.key}
                   // formKey={word.key}
                   onFormFieldChange = {this.onFormFieldChange}
                   formLabel={word.label}
                   index = { index }
        />
      );
    });

    return (
      <section className="madlib-form">
        <form
          onSubmit={this.onSubmit}
          className="madlib-form-form"
        >
          {formFields}
          <input
            className="button success"
            type="submit"
            value="MadLib Me!"
          />
        </form>
      </section>
    );
  }
}

export default MadLibForm;
