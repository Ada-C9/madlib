import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibForm extends Component {
  static propTypes = {
    madLib: PropTypes.object.isRequired,
    updateWordCallback: PropTypes.func.isRequired,
    completeMadLibCallback: PropTypes.func.isRequired,
  }

  render() {
    const inputs = this.props.madLib.words.map((word) => {
      return (
        <div key={ `${this.props.madLib.title}-${word.key}` }>
          <input
            type="text"
            placeholder={ word.label }
            onChange={ (event) => { this.props.updateWordCallback(word.key, event.target.value); } }
          />
        </div>
      );
    });


    return (
      <form onSubmit={ this.onFormSubmit }>
        {inputs}
        <input type="submit" value="Complete Mad Lib!" />
      </form>
    );
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.completeMadLibCallback();
  }
}

export default MadLibForm;
