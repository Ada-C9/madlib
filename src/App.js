import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';

// Modify App.js to only render the Story component once the form has been submitted.

class App extends Component {
  constructor() {
    super();

    // instance of app
    this.state = {
      selectedMadLib: MadLibs[Math.floor(Math.random() * MadLibs.length)],
      displayStory: false
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

    // this allows you to see your changes in the DOM
    this.setState({selectedMadLib: updatedMadLib});
  }

  onSubmittedWords = () => {
    this.setState({displayStory: true});
  }

  render() {
    {if (this.state.displayStory === true) {
        return <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
        />
      }}

    return (
      <section className="App">
      <h1>Welcome to MadLibs!</h1>
      <p>Fill in all of the choices to see your final story.</p>
      {/*Render your form with input values*/}

      <form>
      {this.state.selectedMadLib.words.map((word) => {
        return <input onChange={(event) => {this.updateWord(word.key, event.target.value);}} key={word.key} placeholder={word.label} type="text" />;
      })}
      </form>

      <button type="submit" value="" onClick={this.onSubmittedWords}>Submit</button>

      </section>
    );
  }
}

export default App;
