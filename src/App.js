import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';

import WordsForm from './components/WordsForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // generate random:
      selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length)],
      // hide story until submit button is calles:
      storyActive: false
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) => {
    console.log(this.state.selectedMadLib)
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({
      selectedMadLib: updatedMadLib
    });
  }

  // Generate a different madLib:
  playAgain = () => {
    // event.preventDefault();
    this.setState({
      selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length)],
      storyActive: !this.state.storyActive
    });
    // this.changeDisplay;
  }

  // Show or hide story:
  changeDisplay = () => {
    const currentState = this.state.storyActive;
    this.setState({
      storyActive: !currentState
    });
  };

  render() {
    return (
      <section className="App">
      <h1>Welcome to MadLibs!</h1>

      <div className={this.state.storyActive ? 'hidden': 'show'}>
      <p>Fill in all of the choices to see your final story.</p>
         {<WordsForm
            words={this.state.selectedMadLib.words} updateWord={this.updateWord}
            changeDisplay={this.changeDisplay}
          />}
        </div>

        <div className={this.state.storyActive ? 'show': 'hidden'}>
          <Story
            title={ this.state.selectedMadLib.title }
            text={ this.state.selectedMadLib.getText() }
          />
          <button onClick={this.playAgain}> Play Again </button>
        </div>

        </section>
      );
    }
  }

  export default App;
