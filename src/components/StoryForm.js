import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StoryForm.css';

class StoryForm extends Component {

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
    words: PropTypes.func.isRequired,
    changeStory: PropTypes.func.isRequired,
  };

  onFieldChange = (key, value) => {
      this.props.updateWord(key, value);
   };

  onSubmit = (event) => {
      event.preventDefault();
      this.props.changeStory()

    };

  render() {
    let words = this.props.words;
    let inputs = words.map((word) => {
          return (
           <section key={word.key}
           className="label-input">
             <label>{word.label}</label>
             <input
              name={word.key}
              onChange={(event) => { this.onFieldChange(word.key, event.target.value) }}
              />
           </section>
         );
       });
    return (
      <section>
        <form className="story-form"
        onSubmit = {this.onSubmit}
          >
          {inputs}
          <input type ="submit" className="button"/>
        </form>
      </section>
    );
  }
}

export default StoryForm;
