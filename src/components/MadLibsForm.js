import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibsForm extends Component {
  static propTypes = {
    wordsNeeded: PropTypes.array.isRequired,
    updateWordCallback: PropTypes.func.isRequired,
  };

  constructor (props) {
    super();
    this.state = {
      wordsNeeded: props.wordsNeeded
    };
  }

  onInputChange = (event) => {
    let updatedWords = this.state.wordsNeeded;
    let updatedWord = updatedWords.find((wordObject) => {
      return wordObject.key === event.target.name;
    });
    updatedWord.value = event.target.value;
    this.setState({wordsNeeded: updatedWords});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    for (let wordObject of this.state.wordsNeeded) {
      this.props.updateWordCallback(wordObject.key, wordObject.value);
    }
  }

  render() {
    const wordInputs = this.state.wordsNeeded.map((wordObject) => {
      return(<div>
        <input
        key={wordObject['key']}
        name={wordObject['key']}
        placeholder={wordObject['label']} onChange={ this.onInputChange } />
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
