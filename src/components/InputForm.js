import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  static propTypes = {
    madlib: PropTypes.object.isRequired,
    submitHandler: PropTypes.func.isRequired
  }

  constructor(props) {
    super();
    this.state = this.getMadLibFields(props.madlib);
  }

  getMadLibFields = (ml) => {
    const madLibObject = {};

    ml.words.forEach((word) => {
      madLibObject[word.key] = '';
    });

    return madLibObject;
  }

  inputChangeHandler = (event) => {
    const updatedState = {};
    updatedState[event.target.name] = event.target.value;

    this.setState(updatedState);
  }

  onSubmitClick = (event) => {
    event.preventDefault();
    const submittedWords = Object.assign({}, this.state);
    this.props.submitHandler(submittedWords);
  }

  render () {
    const madLib = this.props.madlib;
    const inputFields = madLib.words.map((word, index) => {
      return (
        <div key={index}>
          <input
            type='text'
            name={word.key}
            placeholder={word.label}
            value={this.state[word.key]}
            onChange={this.inputChangeHandler}
          />
        </div>
      )
    })

    return(
      <form id='input-form' onSubmit={this.onSubmitClick}>
        {inputFields}
        <input type='submit' value='Submit Words' />
      </form>
    );
  }
}

export default InputForm;
