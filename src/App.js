import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import LibForm from './components/LibForm.js';
import Dropdown from './components/Dropdown.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: null,
      storyCompleted: false,
      storySelected: true,
    };
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  selectedNum = (index) => {
    this.setState({
      selectedMadLib: MadLibs[index]
    });
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

  completeStory = () => {
    this.setState({
      storyCompleted: true
    });
  }

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        {!this.state.storyCompleted && <Dropdown
          selectedNum={this.selectedNum}
        />
        }
        {(!this.state.storyCompleted && this.state.selectedMadLib != null) && <p>Fill in all of the choices to see your final story.</p>
        }
        {(!this.state.storyCompleted && this.state.selectedMadLib != null) &&
          <LibForm
          selectedMadLib = {this.state.selectedMadLib}
          updateWord = {this.updateWord}
          completeStory = {this.completeStory}
          />
        }
        {this.state.storyCompleted &&
          <Story
          title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
        }
        {this.state.storyCompleted &&
          <button type="button" onClick={ this.refreshPage }> <span>Play Again</span> </button>
        }
      </section>
    );
  }
}

export default App;
