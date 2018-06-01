import React, { Component } from 'react';
import './MadLibForm.css';

class MadLibForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

      words: this.props.words
    };
  }
  render() {
    const formFields = this.state.words.map((word, index) => {
      return (
        <FormField key={word.key}
                   // onSomeShit = {
                   //   this.onSomeShit
                   // }
                   formLabel={word.label}
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
