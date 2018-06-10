import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadLibForm from './components/MadLibForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0],
      showStory: false,
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

  completeMadLib = () => {
    this.setState({ showStory: true });
  }

  render() {
    let story = null;
    if (this.state.showStory) {
      story = (
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
        />
      );
    }

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <MadLibForm
          madLib={ this.state.selectedMadLib }
          updateWordCallback={ this.updateWord }
          completeMadLibCallback={ this.completeMadLib }
        />
        {story}
      </section>
    );
  }
}

export default App;
