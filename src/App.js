import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import InputForm from './components/InputForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: this.getRandomMadLib(),
    };
  }

  getRandomMadLib = () => {
    return MadLibs[Math.floor(Math.random() * MadLibs.length)]
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

  showStory = () => {
    const allFilled = this.state.selectedMadLib.words.every((word) => {
      return (word.value !== undefined)
    });

    if (allFilled){
      return (<Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
      />)
    }
  }

  forceRender = () => {
    this.setState({selectedMadLib: this.getRandomMadLib()})
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <InputForm madlib={this.state.selectedMadLib} submitHandler={this.submitHandler}/>
        {this.showStory()}
        <button onClick={this.forceRender}>Get New MadLib</button>
      </section>
    );
  }
}

export default App;
