import React, {Component} from 'react';
import './WordsForm.css';



class WordsForm extends Component {


  // Decide how many input fields we need:

onFieldChange = () => {

}

  render() {

    const MadLib = this.props.madLib;

    return(
      <div>
      <form
      onSubmit={this.onSubmit}
      className="new-words-form">

      <div>
        <label htmlFor="word">Word:</label>
        <input name="word"
        onChange={(event) => {this.onFieldChange('word', event.target.value)}}
        />
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
