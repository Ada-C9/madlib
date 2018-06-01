import React, { Component } from 'react';
import MadLibs from '../madlibs/MadLibs.js';
import PropTypes from 'prop-types';

class WordForm   extends Component {

  static propTypes = {
    storyObj: PropTypes.object.isRequired,
  }

  constructor() {
    super();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission");

    this.setState({
      name: '',
      email: ''
    })
  }

  // Update the value of a word in the selected
  // mad lib using setState

  render() {

    const properties = this.props.storyObj.words;

    const wordList = properties.map((word, index) => {
      return  (<div key={index} >
          <label htmlFor="word"> {word['label']} </label>
          <input
            name="name"
            type="text"
          />
        </div>)
    });

    return (
      <form
        id="new-student"
        onSubmit={this.onFormSubmit} >
        {wordList}
      <input type="submit" value="Add Student" />
    </form>
    );
  }
}

export default WordForm;
