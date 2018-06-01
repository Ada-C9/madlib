import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import InputForm from './components/InputForm';

class App extends Component {
  constructor() {
    super();

    const randomMadLib = Math.floor(Math.random() * 4); // gets floor of 4 x (random decimal 0 - 1)
    this.state = {
      selectedMadLib: MadLibs[randomMadLib],
      visible: true,
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

  foo = 3;

  render() {


    let madLibWords = this.state.selectedMadLib.words;

    return (
      <section className="App">
      <h1>Welcome to MadLibs!</h1>
      <p>Fill in all of the choices to see your final story.</p>
      {/*
        Render your form with input values
        */}
        <InputForm words={madLibWords} callBack={this.updateWord}/>
        <Story
        title={ this.state.selectedMadLib.title }
        text={ this.state.selectedMadLib.getText() }
        />
        </section>
      );
    }
  }

  export default App;
