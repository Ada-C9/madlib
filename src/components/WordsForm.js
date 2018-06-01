import React, {Component} from 'react';
import './WordsForm.css';
import PropType from 'prop-types';

class WordsForm extends Component {

  constructor() {
    super();

    this.state = {
      // for disabling button until form is comleted:
      canBeSubmitted: 0
    };
  }

  static propTypes = {
  updateWord: PropType.func.isRequired,
  changeDisplay: PropType.func.isRequired,
  words: PropType.array.isRequired,
}

  onFieldChange = (key, value) => {
    this.props.updateWord(key, value);

    // add that input has been completed:
    let currentInputsFilled = this.state.canBeSubmitted
    this.setState({
      canBeSubmitted: currentInputsFilled + 1
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    // this.setState({
    //   canBeSubmitted: 0
    // });

    this.props.changeDisplay();
  }

  render() {

    let words = this.props.words;
    let inputTags = words.map((word) => {
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
      className='button'
      disabled={this.state.canBeSubmitted === this.props.words.length ? false : true}
      type="submit"
      value="See your Madlib"
      />

      </form>
      </div>
    )
  }
}

export default WordsForm
