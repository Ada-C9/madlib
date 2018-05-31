import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewMadLibForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      words: props.words
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
          <label htmlFor={"noun_1"}>
            Adjective 1:
          </label>
          <input
            name="noun_1"
            placeholder="noun"
            onChange={(event) => { this.onFieldChange('noun_1', event.target.value) }}
            value={this.state.noun_1}
          />
        </div>

        </form>
        <p>
          { this.props.title }
        </p>
      </div>
    );
  }
}

export default NewMadLibForm;
