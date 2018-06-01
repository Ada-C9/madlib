import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
    updateWord: PropTypes.func.isRequired,
    changeDisplayState: PropTypes.func.isRequired
  }

  generateForm(){
    return(
      this.props.words.map((word)=>{
        return(
          <div key={word.key}>
            <label htmlFor={word.key}>{word.label}:</label>
            <input
              name = {word.label}
              onChange = {
                (event)=>{this.props.updateWord(word.key, event.target.value)}
              }
              value = {this.props.words[word.key]}
            />
          </div>
        );
      })
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.changeDisplayState();
  }

  render(){
    return(
      <div>
        <form onSubmit = { this.onSubmit }>
          { this.generateForm() }
          <input
            className="button success"
            type="submit"
            value="Generate MadLib"
          />
        </form>
      </div>
    );
  }
}

export default Form;
