import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadlibForm from './components/MadlibForm.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0],
      wordList:  [
          {
            "key": "adjective_1",
            "label": "Adjective 1"
          },
          {
            "key": "adjective_2",
            "label": "Adjective 2"
          },
          {
            "key": "noun_1",
            "label": "Noun 1"
          },
          {
            "key": "noun_2",
            "label": "Noun 2"
          }
        ]
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord(key, value) {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }


  render() {

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        {/*
          Render your form with input values
        */}
        <MadlibForm words={this.state.wordList} />
          <Story title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
