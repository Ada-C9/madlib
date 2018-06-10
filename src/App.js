import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import Form from './components/Form.js';


class App extends Component {
  constructor() {
    super();

    this.state = this.getState();
  }

  getState() {
    return {
      selectedMadLib: MadLibs[Math.floor((Math.random()*MadLibs.length))],
      displayMadLib: false
    };
  }

  // update the value of a word in the selected mad lib using setState
  updateWord(key, value) {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});
  }

  updateAllWords = (words) => {
    console.log('words in app.js updateAllWords function');
    console.log(words);

    for(let i=0; i < words.length; i++) {
      let key = words[i]["key"];
      let value = words[i]["value"];

      this.updateWord(key, value);
      this.setState({displayMadLib: true});
    }
  }

  getWords() {
    let words = this.state.selectedMadLib.words;
    return words
  }

  handleClick = () => {
    this.setState(this.getState());
  }

  render() {
    // testing stuff here
    let words = this.state.selectedMadLib.words;
    console.log('words in app.js render function')
    console.log(words);

    let display;

    if (this.state.displayMadLib) {
      display =
        <div>
          <Story
            title={ this.state.selectedMadLib.title }
            text={ this.state.selectedMadLib.getText() }
            />
        <button onClick={this.handleClick}>Play Again</button>
      </div>
    }
    else {
      display =
        <div>
          <p>Fill in all of the choices to see your final story.</p>
          <Form words={this.getWords()} updateAllWords={this.updateAllWords} />
        </div>
    }

    return (
      <section className="App">

        <h1>WELCOME TO MADLIBS!</h1>

        {display}

      </section>
    );
  }
}

export default App;
