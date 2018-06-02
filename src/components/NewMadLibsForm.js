import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMadLibsForm extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
    updateWord: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    let initialState = {};
    props.words.forEach((word) => {
      initialState[word.key]= '';
    });

    this.state = initialState;
  }

  onInputChange = (event) => {
    console.log(`Got input change on ${event.target.name}, new value is ${event.target.value}`)

    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log('form submissions');

    this.props.words.forEach((word) => {

      this.props.updateWord(word.key, this.state[word.key])
      this.setState({
        [word.key]: '',
      });
    });

  }


  render() {

    const words = this.props.words;
    const inputs = words.map((word, index) => {
      return <div key={ index }>
            <label htmlFor={word.label}></label>
            <input
              name={word.key}
              type="text"
              placeholder={word.key}
              value={this.state[word.key]}
              onChange={this.onInputChange}
              />
          </div>
    });

    return (
      <div>
        <form
        className="new-madlibs-form"
        id="new-madlibs"
        onSubmit={this.onFormSubmit}
        >
          {inputs}
          <input
            className="button success"
            type="submit"
            value="Show MadLib"
          />
        </form>
      </div>
    )
  }

}

export default NewMadLibsForm;
