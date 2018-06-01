import React, { Component } from 'react';

import PropTypes from 'prop-types';

class WordForm extends Component {


  static propTypes = {
    updateWord: PropTypes.func.isRequired
  }

  onWordChange = (key, value) => {
    this.props.updateWord(key, value)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.submitted()
    }

  render() {

    const printWordForm =     this.props.words.map((label) => {
      return (<div>
      <label htmlFor={label.key}>{label.label}: </label>
      <input name="word" onChange={(event) => { this.onWordChange(label.key, event.target.value)}}/>
      </div>)
    });


    return (
      <div>
        <form className="madlib-form" onSubmit={ this.onSubmit }>

        {printWordForm}

        <input
        className="button success"
        type="submit"
        value="Submit"

        />
        </form>
      </div>
    )
  }

}

export default WordForm;
