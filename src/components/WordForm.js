import React, { Component } from 'react';

import PropTypes from 'prop-types';

class WordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ''
    }
  }

  static propTypes = {
    updateWord: PropTypes.func.isRequired
  }

  onWordChange = (key, value) => {
    this.setState({
      word: value
    })
    this.props.updateWord(key, value)
  }

  onSubmit = (event) => {
    event.preventDefault();
      this.setState({
        words: ''
      })
    }




  render() {

    const printWordForm =     this.props.words.map((label) => {
      return (<div>
      <label htmlFor={label.key}>{label.label}: </label>
      <input name="word" onChange={(event) => { this.onWordChange(label.key), event.target.value}}/>
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
