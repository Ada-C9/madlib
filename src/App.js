import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import Form from './components/Form.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[1],
      showStory: false,
    };
  }

  // Update the value of a word in the selected
  // mad lib using setState

  updateWord = (key, value)  => {
      const updatedMadLib = this.state.selectedMadLib;
      const changedWord = updatedMadLib.words.find((word) => {
        return word.key === key
      });
      changedWord.value = value;
      this.setState({selectedMadLib: updatedMadLib});
    }

  completeMadlib = () => {
    this.setState({ showStory: true });
  }

  render() {
    let story = null;
    if (this.state.showStory) {
      story = (
        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      )
    }

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <Form
        madLib={ this.state.selectedMadLib }
        updateWordCallback={ this.updateWord }
        completeMadlibCallback={this.completeMadlib}
        />
        { story }
      </section>
    );
  }
}

export default App;
