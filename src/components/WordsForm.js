import React, {Component} from 'react';
import './WordsForm.css';
import PropType from 'prop-types';

class WordsForm extends Component {

  constructor() {
    super();
    this.state = {
      // for disabling button until form is comleted:
      disableSubmitButton: true
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
    // show story and hide form:
    this.props.changeDisplay();
  }

// Decide if submiti button is enabled or not:
  validadeAllInputsCompleted = () => {
    let disable = false;
    this.props.words.map((word) => {
      if (!word.value) {
        disable = true
      }
    });
    return disable
  }


  render() {

    let words = this.props.words;
    let inputTags = words.map((word) => {
      return(
        <section key={word.key}>
        <label htmlFor="word">{word.label}</label>
        <input
        name={word.key}
        onChange={(event) => { this.onFieldChange(word.key, event.target.value)
        }}
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
      disabled={this.validadeAllInputsCompleted()}
      type="submit"
      value="See your Madlib"
      />

      </form>
      </div>
    )
  }
}

export default WordsForm
