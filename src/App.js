import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import StoryForm from './components/StoryForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[(Math.floor(Math.random() * 4)  )],
      storyVisible: false,
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

  showStory = () => {
    if (this.storyVisible) { return(<Story
      title={ this.state.selectedMadLib.title}
      text={ this.state.selectedMadLib.getText()}
    />)}
  }

  visibility = () => {
    this.setState({
      storyVisible: true,
    });
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        {<StoryForm
          words={ this.state.selectedMadLib.words }
          updateWord={ this.updateWord.words }
          visibility={ this.visibility }
        />}
        {this.showStory()}
      </section>
    );
  }
}

export default App;
