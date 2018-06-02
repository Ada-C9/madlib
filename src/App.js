import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadLibForm from './components/MadLibForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length)],
      hasCompleteMadLib: false
    };
    this.updateWord = this.updateWord.bind(this);
  }

  // Update the value of a word in the selected mad lib using setState
  updateWord(key, value) {
    console.log(this.state);
    const selectedMadLib = this.state.selectedMadLib;
    selectedMadLib.words.find((word) => { return word.key === key}).value = value;
    this.setState({selectedMadLib, hasCompleteMadLib: true });
  }

  render() {
    const storyBody =
      <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
      />;

    const formBody =
      <MadLibForm
        words={this.state.selectedMadLib.words}
        updateWord={this.updateWord}
      />;

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        {this.state.hasCompleteMadLib ? storyBody : formBody}
      </section>
    );
  }
}

export default App;
