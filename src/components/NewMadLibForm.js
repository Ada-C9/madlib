import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewMadLibForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: props.words,
      title: props.title,
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

    this.setState({
      noun_1: this.state.noun_1
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form
          onSubmit={ this.onSubmit } className="new-madlib-form"
        >
          <div>
            <label htmlFor={this.props.words[0].key}>
            {this.props.words[0].key}:
            </label>
            <input
              name={this.props.words[0].key}
              placeholder={this.props.words[0].key}
              onChange={(event) => { this.onFieldChange('noun_1', event.target.value) }}
              value={this.state.words[0].value}
            />
          </div>
          <input
            className="button"
            type="submit"
            value="MadLib!!"
          />
        </form>
      </div>
    );
  }
}

export default NewMadLibForm;
