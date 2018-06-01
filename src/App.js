import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import WordSelectForm from './components/WordSelectForm.js'

class App extends Component {
  constructor() {
    super();

    // Get a random index of an array
    // Math.radom() returns a random num between 0 and 1, so we multiply that number by our length in order to get a random float and then we round it with Math.floor to the nearest whole num
    this.state = {
      selectedMadLib: MadLibs[0]
      //[Math.floor(Math.random()*MadLibs.length)]
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) => {
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
      < WordSelectForm wordsSubmitCallback= {this.updateWord} />
      {/*
        Render your form with input values
        */}
        <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
        />
        </section>
      );
    }
  }

  export default App;
