import React from 'react';
import PropTypes from 'prop-types';

class MadLibForm extends React.Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
    updateWordCallback: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    const initialState = {};
    props.words.forEach((word) => {
      initialState[word.key] = ''
    });
    this.state = initialState;
  }

  onInputChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  }


  onFormSubmit = (event) => {
    event.preventDefault();
    const keys = Object.keys(this.state);


    keys.forEach((key) => {
      this.props.updateWordCallback(key, this.state[key]);
    });

  }


  render() {
    const formInputs = this.props.words.map((word, index) => {
      return (
        <div>
        <input name={ word.key }
               type='text'
               placeholder={ word.label }
               value={ this.state[index] }
               onChange={ this.onInputChange }
        />
        </div>
      );
    });

    return(
      <form onSubmit={this.onFormSubmit}>
        { formInputs }
        <input type='submit' value='Create MadLib'/>
      </form>
    );
  }
}

export default MadLibForm
