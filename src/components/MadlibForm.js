import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MadlibForm extends Component {
  static propTypes = {
    addStoryCallback: PropTypes.func
  }

  constructor(props) {
    super(props);

    let initialState = {};
    props.input.words.forEach((word) => {
      initialState[word.key] = "";
    });
    this.state = initialState;
  }

  onInputChange = (event) => {
    console.log(`Got a input change event on input ${event.target.name} new value ${event.target.value}`);
      const newState = {};
      newState[event.target.name] = event.target.value
      this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submition");

    this.props.input.words.forEach((word) => {
      this.props.addStoryCallback(word.key, this.state[word.key])
      this.setState({[word.key]: ""});
    });



  }

  render() {

    const words = this.props.input.words;
    const inputs = words.map((word, index) => {
      return <div key={index}>
        <input
        name={word.key}
        type="text"
        placeholder = {word.key}
        value={this.state[word.key]}
        onChange={this.onInputChange}
        />
      </div>
    })



    return (
      <div>
      <form
      onSubmit={this.onFormSubmit}
      >
      {inputs}
        <input
          className="button success"
          type="submit"
          value="Update"
        />
      </form>
    </div>
    );
  }
}

export default MadlibForm;
