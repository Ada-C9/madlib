import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';

import WordsForm from './components/WordsForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // selectedMadLib: MadLibs[0]
      selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length)]
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
    this.setState({selectedMadLib: updatedMadLib});
  }

  showStory = () => {
    // console.log("working");
    let element = document.getElementById("story");
    console.log(element);
    element.classList.remove("hidden");
  }

  render() {
    return (
      <section className="App">
      <h1>Welcome to MadLibs!</h1>
      <p>Fill in all of the choices to see your final story.</p>
      {
        /*  Render your form with input values */
        <WordsForm
        words={this.state.selectedMadLib.words} updateWord={this.updateWord}
        showStory={this.showStory}
        />}

        <div id="story" className="hidden">
        <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
        />
        </div>

        </section>
      );
    }
  }

  export default App;
