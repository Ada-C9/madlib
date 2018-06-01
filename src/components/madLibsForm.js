import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './madLibsForm.css'

class MadLibsForm extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();

  }


  render(){
    const storyInputs = this.props.words.map((words, index) =>{
      console.log(words.key);
      return (
        <input
        placeholder= { words.label }
        onChange={(event) => {this.props.updateWord(words.key, event.target.value)}}
        key = { index }
        />
      );
    });

    console.log(this.props);
    return (
      <div className="words-form-wrapper">
        <form className="words-form" onSubmit={this.handleFormSubmit}>
          { storyInputs }
          <input
            className="button success"
            type="submit"
            value="Make My MadLib!"
          />
        </form>
      </div>
    );
  }
}

export default MadLibsForm;

MadLibsForm.propTypes = {
  words: PropTypes.array,
  updateWord: PropTypes.func,
}
