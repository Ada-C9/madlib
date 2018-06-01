import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Dropdown from './components/Dropdown';
import MadLibsForm from './components/MadLibsForm';
import Story from './components/Story.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[Math.floor(Math.random()*MadLibs.length)],
      formSubmitted: false,
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) =>  {
    console.log(this.state);
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  updateFormStatus = () => {
    this.setState({
      formSubmitted: true
    });
  }

  render() {
    let story = this.state.formSubmitted ? <Story
      title={ this.state.selectedMadLib.title }
      text={ this.state.selectedMadLib.getText() }
      /> : null ;
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <Dropdown />
        <MadLibsForm
          wordsNeeded={ this.state.selectedMadLib.words }
          updateWordCallback={ this.updateWord }
          updateFormStatusCallback={ this.updateFormStatus }
         />
        { story }
      </section>
    );
  }
}

export default App;
