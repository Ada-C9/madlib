import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import StoryForm from './components/StoryForm.js'
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    let num = Math.floor(Math.random() * 4)
    console.log({num})

    this.state = {
      selectedMadLib: MadLibs[num]
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
        {
          // Render your form with input values
        <StoryForm
          words={this.selectedMadlib.words}
          updateWord={this.updateWord}
        />
        }
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
