import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibsForm extends Component {
  static propTypes = {
    wordsNeeded: PropTypes.array.isRequired,
    updateWordCallback: PropTypes.func.isRequired,
    showStoryCallback: PropTypes.func.isRequired,
  };

  onInputChange = (event) => {
    this.props.updateWordCallback(event.target.name, event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.showStoryCallback();
    for (let inputField of event.target) {
      if (inputField.type !== 'submit') {
        inputField.value = '';
      }
    }
  }

  render() {
    const wordInputs = this.props.wordsNeeded.map((wordObject) => {
      return(<div key={wordObject['key']}>
      <input
      name={wordObject['key']}
      placeholder={wordObject['label']}
      onChange={ this.onInputChange }
      />
      </div>);
    });

    return (
      <form onSubmit={ this.onFormSubmit }>
        { wordInputs }
        <input type="submit" />
      </form>
    );
  }
}

export default MadLibsForm;
