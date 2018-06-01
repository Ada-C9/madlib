import React, { Component } from 'react';
import FormField from './FormField';
import './MadLibForm.css';

class MadLibForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.words
    };
  }

  onFormFieldChange = (key, value) => {
    console.log(key);
    console.log('foo');
    const updatedState = {};
    updatedState[key] = value;
    this.setState(updatedState);

    console.log(`Updated = ${key} ${value}`);
    // this.setState(this.state.words[key]= value);
    // this.onFieldChange('name', 'Dumbledore')

    // this.props.updateWord(key, value);
    // console.log(`Updated = ${key}`);
  };

  render() {
    const formFields = this.state.words.map((word, index) => {
      // console.log(word.key);
      return (
        <FormField key = {word.key}
                   formKey={word.key}
                   // onFormFieldChange = {
                   //   this.onFormFieldChange
                   // }
                   formLabel={word.label}
                   index = { index }
        />
      );
    });




    return (
      <section className="madlib-form">
        <form
          // onSubmit={ this.onSubmit }
          // className="???"
        >
          {formFields}
        </form>
      </section>
    );
  }
}

export default MadLibForm;
