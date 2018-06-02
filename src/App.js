import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import MadLibForm from './components/MadLibForm.js'
import StorySelector from './components/StorySelector.js'
import Story from './components/Story.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMadLib: MadLibs[0],
      words: {},
      submitted: false
    };
  }

  // methods to find story options
  findStories = () => {
    const stories = [];
    MadLibs.forEach((story, index) => {
      const storyDetails = {};
      storyDetails.title = story.title;
      storyDetails.index = index;
      stories.push(storyDetails);
    });
    return stories;
  };

  // method to set selectedMadLib to match the option selected by user
  setStory = (storyIndex) => {
    this.setState({
      selectedMadLib: MadLibs[storyIndex],
      words: {},
      submitted: false
    });
  };

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

  updateWords = (key, value) => {
    const updatedWords = this.state.words;

    updatedWords[key] = value;
    this.setState({ words: updatedWords });
  };

  renderStory = () => {
    const words = this.state.words
    for (let field in words) {
      this.updateWord(field, words[field]);
    }
    const submitted = !this.state.submitted
    this.setState({ submitted });
    console.log(this.state.selectedMadLib);
  }

  render() {
    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <StorySelector stories={this.findStories()} setStoryIndex={ this.setStory }/>
        <p>Fill in all of the choices to see your final story.</p>
        <div className={ this.state.submitted ? "hidden" : "" }>
          <MadLibForm
            wordTypes={this.state.selectedMadLib.words}
            setWords={this.updateWords}
            submitStory={ this.renderStory }
          />
        </div>
        <div className={ this.state.submitted ? "" : "hidden" }>
          <Story
            title={ this.state.selectedMadLib.title }
            text={ this.state.selectedMadLib.getText() }
            />
          </div>
      </section>
    );
  }
}

export default App;
