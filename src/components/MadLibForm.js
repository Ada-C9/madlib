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
    return (
      <section className="madlib-form">

      </section>
    );
  }
}

export default MadLibForm;
