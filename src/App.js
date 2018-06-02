import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadlibForm from './components/MadlibForm.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[getRandomInt(MadLibs.length)],
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

  renderStory = () => {
    this.setState( {
      showStory: true,
    })
  }

  render() {
    const showStory = this.state.showStory;

    const story = showStory ? (
      <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
      />
    ) : (
      ''
    );

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <MadlibForm
          renderStory = { this.renderStory }
          words={this.state.selectedMadLib.words}
          updateWord={ this.updateWord }
        />
          { story }
      </section>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default App;
