import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import InputForm from './components/InputForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0],
    };
  }

  showStory = () => {
    const madLib = this.state.selectedMadLib;

    madLib.words.forEach((word) => {
      if (madLib.getWord(word.key) === undefined) {
        return false;
      }
      return true;
    });
  }

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

  submitHandler = (formInput) => {
    for (let type in formInput) {
      this.updateWord(type, formInput[type]);
    }
  }

  render() {
    let story = null;
    if (this.showStory()) {
      <Story title={this.state.selectedMadLib.title} text={this.state.selectedMadLib.getText()} />
    }
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <InputForm madlib={this.state.selectedMadLib} submitHandler={this.submitHandler}/>
        {story}
      </section>
    );
  }
}

export default App;
