import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import Form from './components/Form.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[Math.round(Math.random() * (3 - 0)) + 0],
      storyOne: MadLibs[0],
      storyTwo: MadLibs[1],
      storyThree: MadLibs[2],
      storyFour: MadLibs[3]
    };
  }

  selectStoryOne= () => {
    this.setState({
      selectedMadLib: MadLibs[0]
    })

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

  getText() {
    
  }

  render() {
    console.log(this.state.selectedMadLib);

    const forms = this.state.selectedMadLib.words.map((form, index) => {
      return (
        <Form
          key={index}
          wordKey={form.key}
          wordLabel={form.label}
        />
      );
    });

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>

        <div className='story-menu'>
          <button onClick={this.selectStoryOne}>{this.state.storyOne.title}</button>
          <button>{this.state.storyThree.title}</button>
          <button>{this.state.storyThree.title}</button>
          <button>{this.state.storyFour.title}</button>
        </div>

        <div>
          { forms }
        </div>

        <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
