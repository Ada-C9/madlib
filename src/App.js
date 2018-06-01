import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadLibForm from './components/MadLibForm.js';

class App extends Component {
  constructor() {
    super();
    let selected = (Math.floor(Math.random() * 4));
    this.state = {
      selectedMadLib: MadLibs[selected],
      status: false
    };
  }

  // Update the value of a word in the selectedmad lib using setState
  updateWord = (key, value) => {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({ selectedMadLib: updatedMadLib });
  }

  onFormSubmit = () => {
    this.setState({
      status: true
    });
  }

  onNewGame = () => {
    window.location.reload();
  }

  display = () => {
    let status = this.state.status;
    if (status === false) {
      return (
        <div>
        <p>Fill in all of the choices to see your final story.</p>
        <MadLibForm
          updateWord={this.updateWord}
          data={this.state.selectedMadLib.words}
          status={this.state.status}
          onFormSubmit={this.onFormSubmit}
        />
        </div>
    )} else {
      return (
        <div>
          <Story
            title={ this.state.selectedMadLib.title }
            text={ this.state.selectedMadLib.getText() }
          />
        </div>
      )}
  }

  render() {
    console.log(this.state.selectedMadLib.title);
    const title = this.state.selectedMadLib.title;
    return (
      <div>
        <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <h2>Play: {title}</h2>
        <h2><button onClick={this.onNewGame}>Random New Game</button></h2>
        {this.display()}
        </section>
      </div>
    );
  }
}

export default App;
