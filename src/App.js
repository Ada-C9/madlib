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
      showStory: false,
    };
  }

  selectMadLib = (storyTitle) => {
    let updatedMadLibStory = MadLibs.find((story) => {
      return story.title === storyTitle
    });
    this.setState({
      selectedMadLib: updatedMadLibStory
    });
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) =>  {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  showStory = () => {
    this.setState({
      showStory: true,
    });
  }

  hideStory = () => {
    this.setState({
      showStory: false
    });
  }

  render() {
    let story = this.state.showStory ? <Story
      title={ this.state.selectedMadLib.title }
      text={ this.state.selectedMadLib.getText() }
      /> : null ;
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>

        <h3>Story: { this.state.selectedMadLib.title }</h3>

        <Dropdown
          selectMadLibCallback={ this.selectMadLib } selectedMadLibTitle={ this.state.selectedMadLib.title }
          hideStoryCallback={ this.hideStory }
        />

        <MadLibsForm
          wordsNeeded={ this.state.selectedMadLib.words }
          updateWordCallback={ this.updateWord }
          showStoryCallback={ this.showStory }
         />
        { story }
      </section>
    );
  }
}

export default App;
