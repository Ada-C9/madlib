import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import Form from './components/Form.js';
class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[0]
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
    this.setState({selectedMadLib: updatedMadLib});
  }

//form keeps track of individual word content
//app keeps track of stories coming in.

  currentMadlib = () => {
    const aMadlib = this.state.selectedMadLib;
    //loop through the string and update the content with values from the form?
    //pass content from form into getWord , display.

    //pass this function as a prop to the Form -
    //search for itms within the getWord() function of the object.
    //display that function
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <Form />

        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />


      </section>
    );
  }
}

export default App;
