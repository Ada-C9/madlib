import React, {Component} from 'react';
import './WordsForm.css';



class WordsForm extends Component {


  // Decide how many input fields we need:

  onFieldChange = (key, value) => {
    this.props.updateWord(key, value);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.showStory();
  }

  render() {

    const words = this.props.words;
    const inputTags = words.map((word) => {
      return(
        <section key={word.key}>
        <label htmlFor="word">{word.label}</label>
        <input
        name={word.key}
        onChange={(event) => { this.onFieldChange(word.key, event.target.value) }}
        />
        </section>
      );
    });

    return(
      <div>
      <form
      onSubmit={this.onSubmit}
      className="new-words-form">

      <div>
      {inputTags}
      </div>

      <input
      className="button"
      type="submit"
      value="See your Madlib"
      />

      </form>
      </div>
    )
  }
}

export default WordsForm
