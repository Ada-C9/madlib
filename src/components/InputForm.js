import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  static propTypes = {
    madlib: PropTypes.object.isRequired,
  }

  constructor () {
    super();
    this.state = {

    }
  }

  render () {
    const madLib = this.props.madlib
    const inputFields = madLib.words.map((word, index) => {
      return (
        <div key={index}>
          <label htmlFor={word.key}>{word.label}</label>
          <input type='text' name={word.key}/>
        </div>
      )
    })

    return(
      <form id='input-form'>
        {inputFields}
        <input type='submit' value='Submit Words' />
      </form>
    );
  }
}

export default InputForm;
