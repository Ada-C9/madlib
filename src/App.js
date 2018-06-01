import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import NewStoryForm from './components/NewStoryForm.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0]
    };
    this.updateWord = this.updateWord.bind(this);
  }
// Returns a new function that, when called, will have this equal to thisArg, the first parameter equal to param1, the second parameter equal to param2, etc.
//   ex. let add5 = sum.bind(null, 5);
// console.log(add5(10)); is 15

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord(key, value) {
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
        <NewStoryForm
          updateWord={this.updateWord}
          words={this.state.selectedMadLib.words}
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
