import React, { Component } from 'react';
import MadLibs from '../madlibs/MadLibs';
import PropTypes from 'prop-types';

class WordSelectForm extends Component {
  constructor() {
    super();
    // tracking form fields as part of state
    this.state = {
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: ''
    };
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

    const adjective_1 = this.state.adjective_1,
    adjective_2 = this.state.adjective_2,
    noun_1 = this.state.noun_1,
    noun_2 =this.state.noun_2;

    this.setState({
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: ''
    })
    // call back fxn to send to the parent
    this.props.wordsSubmitCallback('adjective_1', adjective_1)
    this.props.wordsSubmitCallback('adjective_2', adjective_2)
    this.props.wordsSubmitCallback('noun_1', noun_1)
    this.props.wordsSubmitCallback('noun_2', noun_2)
  }

  // FORM NOTES:
  // W/ onInputChange and value --- every time the user types into the name input field the NewStudentForm's state is updated.
  render() {
    return (
      <div>
      <form className="words-form" onSubmit={this.formSubmitted}>

      <div>
      <label htmlFor="adjective_1">Adjective 1:</label>
      <input
      onChange={this.onInputChange}
      value={this.state.name}
      name="adjective_1"
      placeholder="Adjective!"
      />
      </div>

      <div>
      <label htmlFor="adjective_2">Adjective 2:</label>
      <input
      onChange={this.onInputChange}
      value={this.state.name}
      name="adjective_2"
      placeholder="Adjective!"
      />
      </div>

      <div>
      <label htmlFor="noun_1">Noun 1:</label>
      <input
      onChange={this.onInputChange}
      value={this.state.name}
      name="noun_1"
      placeholder="Noun!"
      />
      </div>

      <div>
      <label htmlFor="noun_2">Noun 2:</label>
      <input
      onChange={this.onInputChange}
      value={this.state.name}
      name="noun_2"
      placeholder="Noun!"
      />
      </div>

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
