import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  static propTypes = {
    madlib: PropTypes.object.isRequired,
  }

  constructor(props) {
    super();
    this.state = {
      madlib: props.selectedMadlib
    }
  }

  render() {
    const madlib = this.props;
    const inputFields = madlib.words.map((word, index) => {
      return (
        <div>
          <label htmlFor={word.key}>{word.label}</label>
          <input type='text' name={word.key}/>
        </div>
      )
    });

    return (
      <form className="form">
        {inputFields}
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
