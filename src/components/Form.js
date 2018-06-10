import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    madLib: PropTypes.object.isRequired,
    updateWordCallback: PropTypes.func.isRequired,
    completeMadlibCallback: PropTypes.func.isRequired,
  }

  render() {
    const inputs = this.props.madLib.words.map((word, index) => {
      return (
      <div>
        <input
          type='text'
          placeholder={ word.label }
          placeholder={ word.label }
          onChange={ (event) => { this.props.updateWordCallback(word.key, event.target.value); } }
        />
      </div>
      );
    });

    return (
      <form onSubmit={ this.onSubmitForm }>
        { inputs }
        <input type='submit' value='Complete MadLib!' />
      </form>
    );
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.completeMadlibCallback();
  }
}

export default Form;
