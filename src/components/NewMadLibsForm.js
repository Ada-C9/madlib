import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMadLibsForm extends Component {
  static propTypes = {
    addStudentCallback: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: ''
    }
  }

  onInputChange = (event) => {
    console.log(`Got inupt change on ${event.target.name}, new value is ${event.target.value}`)

    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log('form submissions');

    const adjective_1 = this.state.adjective_1;
    const adjective_2 = this.state.adjective_2;
    const noun_1 = this.state.noun_1;
    const noun_2 = this.state.noun_2;
    this.props.addStudentCallback(adjective_1, adjective_2, noun_1, noun_2);

    this.setState({
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: ''
    });
  }


  render() {


    return (
      <div>
        <form
        className="new-madlibs-form"
        id="new-madlibs"
        >
          <div>
            <label htmlFor="adjective_1"></label>
            <input
              name="adjective_1"
              type="text"
              placeholder="adjective_1"
              value={this.state.adjective_1}
              onChange={this.onInputChange}
              />
          </div>

          <div>
            <label htmlFor="adjective_2"></label>
            <input
              name="adjective_2"
              type="text"
              placeholder="adjective_2"
              value={this.state.adjective_2}
              onChange={this.onInputChange}
              />
          </div>

          <div>
            <label htmlFor="noun_1"></label>
            <input
              name="noun_1"
              type="text"
              placeholder="noun_1"
              value={this.state.noun_1}
              onChange={this.onInputChange}
              />
          </div>

          <div>
            <label htmlFor="noun_2"></label>
            <input
              name="noun_2"
              type="text"
              placeholder="noun_2"
              value={this.state.noun_2}
              onChange={this.onInputChange}
              />
          </div>

          <input
            className="button success"
            type="submit"
            value="Show MadLib"
          />
        </form>
      </div>
    );
  }

}

export default NewMadLibsForm;
