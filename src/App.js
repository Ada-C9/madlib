import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import WordForm from './components/WordForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0]
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord=(key, value) => {
    const updatedMadLib = this.state.selectedMadLib;

    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }



  render() {
    console.log('formelement')
    const formelement = this.state.selectedMadLib.words.map((word, key) =>
    <div key={key}>
      <label htmlFor="field">{word.label}:</label>
      <input
        name={"wordinput"}
        onChange={this.onUpdateWord}
        value={this.state.word}
        wordlabel= {word.label} />
    </div>
  );



  return (
    <section className="App">
      <h1>Welcome to MadLibs!</h1>
      <p>Fill in all of the choices to see your final story.</p>



      <form className="form">
        {formelement}

        <input type="submit" value="Submit MadLibs" />
      </form>



      <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
      />
    </section>
  );
}
}

export default App;
