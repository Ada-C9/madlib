import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static propTypes = {
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;
    this .setState(updatedState);
    console.log(`Updated = ${key}`);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let hash = this.state;
    let thisForm = this;
    Object.keys(hash).forEach(function (key) {
      let value = hash[key];
      console.log(`${key} ${value} `)
      thisForm.props.updateWord(key, value)
    })
  }

  render() {
    const words = this.props.words;
    const wordInputs = words.map(word => {
      return (
        <div>
        <label htmlFor={word.key}>{word.label}:</label>
        <input name={word.key}
        placeholder = {word.label}
        onChange={(event)=> {this.onFieldChange(word.key, event.target.value)}}
        value = {this.state.name}
        />
        </div>
      )
    })
    return (
      <div>
      <form className="form" onSubmit={this.handleFormSubmit}>
      {wordInputs}
      <input
      className="button success"
      type="submit"
      value="Submit"
      />
      </form>
      </div>
    );
  }
}

export default Form;
