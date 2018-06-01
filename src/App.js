import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import Form from './components/Form.js'
import Dropdown from './components/Dropdown.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0],
      showForm: 'show',
      showStory: 'hide'
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

  changeDisplayState = () => {
    this.setState({
      showForm: 'hide',
      showStory: 'show'
    });
  }

  getStory = (num) => {
    this.setState({
      selectedMadLib: MadLibs[num]
    });
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>

        <div>
          <Dropdown
            getStory = { this.getStory }
          />
        </div>

        <div className = {this.state.showForm}>
          <Form
            words = { this.state.selectedMadLib.words }
            updateWord = { this.updateWord }
            changeDisplayState = { this.changeDisplayState }
          />
        </div>

        <div className = {this.state.showStory}>
          <Story
            title = { this.state.selectedMadLib.title }
            text = { this.state.selectedMadLib.getText() }
          />
        </div>

      </section>
    );
  }
}

export default App;
