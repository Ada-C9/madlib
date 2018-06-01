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
  //prob need to replace onFieldChange with app.js updateWord function already written
  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState(updatedState);
    console.log(`Updated = ${key}`);
    console.log(value)
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      //aw update with values in form fields? do I even need this if I use the updateWord function from app.js?
    })
  }

  render() {
    const libs = this.state.words.map(function(lib, index) {
      return <div>
              <label htmlFor={ lib.key }>{ lib.key }</label>
              <input name={ lib.key } placeholder={ lib.key } onChange={(event) => { this.onFieldChange(`${lib.key}`, event.target.value) }}
              value=""
              />

             </div>
    });

    return (
      <div>
        <form
          onSubmit={ this.onSubmit } className="new-madlib-form"
        >
          <div>
            {libs}
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
