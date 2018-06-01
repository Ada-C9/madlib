import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import Form from './components/Form.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0],
      showForm: 'show',
      showStory: 'hide'
    };
    // console.log(this.state.selectedMadLib.words[0].key);
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

  // Function to render either the form OR the result
  changeState = () => {
    this.setState({
      showForm: 'hide',
      showStory: 'show'
    });
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>

        <div className = {this.state.showForm}>
          <Form
            words = { this.state.selectedMadLib.words }
            updateWord = { this.updateWord }
            changeState = { this.changeState }
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
