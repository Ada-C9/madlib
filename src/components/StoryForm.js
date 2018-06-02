import React, { Component } from 'react';
import PropTypes from 'prop-types';


class StoryForm extends Component {

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
    words: PropTypes.array,

  };

  onFieldChange = (key, value) => {
      this.props.updateWord(key, value);
   };

  onSubmit = (event) => {
      event.preventDefault();
      console.log("Form submission");
      this.setState({
			displayStory: true
		})
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
      <div className={'true'}>
        <form className="story-form"
        onSubmit = {this.onSubmit}
          >
          {inputs}
          <input type ="submit" className="button"/>
        </form>
      </div>
    );
  }
}

export default StoryForm;
