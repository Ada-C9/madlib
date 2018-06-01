import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibsForm extends Component {
  static propTypes = {
    wordsNeeded: PropTypes.array.isRequired,
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
    // event.preventDefault();
    // call method in App.js passed through props that updates the value of the MadLibs
  }

  render() {
    const wordInputs = this.props.wordsNeeded.map((wordObject) => {
      return(<div>
        <input
        key={wordObject['key']}
        name={wordObject['key']}
        placeholder={wordObject['label']} onChange={ this.onInputChange } />
      </div>);
    });

    return (
      <form>
        { wordInputs }
        <input type="submit" />
      </form>
    );
  }
}

export default MadLibsForm;
