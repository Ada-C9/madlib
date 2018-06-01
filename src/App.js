import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadLibForm from './components/MadLibForm.js';

class App extends Component {
  constructor() {
    super();
    let selected = (Math.floor(Math.random() * 4));
    this.state = {
      selectedMadLib: MadLibs[selected],
    };
    console.log(this.state.selectedMadLib.words)
  }

  // Update the value of a word in the selectedmad lib using setState
  updateWord = (key, value) => {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({ selectedMadLib: updatedMadLib });
  }

  render() {
    console.log(this.state.selectedMadLib.title);
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <MadLibForm
          updateWord={this.updateWord}
          data= {this.state.selectedMadLib.words}
        />
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
