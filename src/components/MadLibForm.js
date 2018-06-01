import React, { Component } from 'react';
import FormField from './FormField';
import PropTypes from 'prop-types';
import './MadLibForm.css';

class MadLibForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.words
    };
  }

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
  };
  onFormFieldChange = (index, value) => {
    // console.log(key);
    console.log('foo');
    const updatedWords = this.state.words;
    updatedWords[index].value = value;
    this.setState({words: updatedWords});

    console.log(`Updated = ${index} ${value}`);
    // this.setState(this.state.words[key]= value);
    // this.onFieldChange('name', 'Dumbledore')

    // this.props.updateWord(key, value);
    // console.log(`Updated = ${key}`);
  };

  // addWords = (student) => {
  //   const students = this.state.students;
  //   students.push(student);
  //   this.setState({
  //     students,
  //   });
  // };
  //
  onSubmit = (event) => {
    event.preventDefault();

    this.state.words.map((word) => {
      // console.log('foo');
      // console.log(word);
      // console.log('bar');
      this.props.updateWord(word.key, word.value)
    });
  //   // if (this.emailValid()) {
  //     this.props.addStudent({
  //       name: this.state.name,
  //       email: this.state.email,
  //     });
  //
  //     this.setState({
  //       name: '',
  //       email: '',
  //     });
  //   }
  };

  render() {
    const formFields = this.state.words.map((word, index) => {
      // console.log(word.key);
      return (
        <FormField key = {word.key}
                   formKey={word.key}
                   onFormFieldChange = {
                     this.onFormFieldChange
                   }
                   formLabel={word.label}
                   index = { index }
        />
      );
    });




    return (
      <section className="madlib-form">
        <form
          onSubmit={ this.onSubmit }
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
