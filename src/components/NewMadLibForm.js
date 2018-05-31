import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewMadLibForm extends Component {
  constructor(props) {
    super();

    this.state = {

    };
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState(updatedState);
    console.log(`Updated = ${key}`);
  }

  onSubmit = (event) => {
    event.preventDefault();

  }

  render() {

    console.log(this.state)
    return (
      <div>
        <form
          onSubmit={ this.onSubmit } className="new-madlib-form"
        >
        <div>
          <label htmlFor="adjective_1">
            Adjective 1:
          </label>
          <input
            name="adjective_1"
            placeholder="adjective"
            onChange={(event) => { this.onFieldChange('adjective_1', event.target.value) }}
            value={this.state.adjective_1}
          />
        </div>

        </form>
      </div>
    );
  }
}

export default NewMadLibForm;
