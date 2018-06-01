import React, { Component } from 'react';
import MadLibs from '../madlibs/MadLibs';
import PropTypes from 'prop-types';

class WordSelectForm extends Component {
  constructor(props) {
    super(props);
    // tracking form fields as part of state
    let initialState = {};

    props.story.words.forEach((word) => {
      initialState[word.key] = '';
    });

    this.state = initialState;
  }

  static propTypes = {
    story: PropTypes.object.isRequired
  }

  // handler for input changes on the form
  onInputChange = (event) => {
    console.log(`Got an input change event on input ${event.target.name}, new value is ${event.target.value}`);

    const newState = {};
    // this is targeting the name section of the input on the form name= ....
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  // handler for form submission
  formSubmitted = (event) => {
    event.preventDefault();

    console.log('Form Submitted')

    this.props.story.words.forEach((word) => {
      const value = this.state[word.key]
      // call back fxn to send to the parent
      this.props.wordsSubmitCallback(word.key, value)
      this.setState({
        [word.key]: ''
      });
    })
  }

  // FORM NOTES:
  // W/ onInputChange and value --- every time the user types into the name input field the NewStudentForm's state is updated.
  render() {
    // need to map over all words for a given story and generate word components

    const wordComponenets = this.props.story.words.map((word, index) => {
      return (<div key= { index }>
        <label htmlFor={word.key}>{word.label}:</label>
        <input
        onChange={this.onInputChange}
        value={this.state[word.key]}
        name={ word.key }
        placeholder= { word.label }
        />
        </div>)
      });

      return (
        <div>
        <form className="words-form" onSubmit={this.formSubmitted}>
        { wordComponenets }
        <input
        className="button success"
        type="submit"
        value="Submit Words"
        />
        </form>
        </div>
      );
    }
  }

  export default WordSelectForm;
