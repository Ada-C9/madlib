import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import WordsForm from './components/WordsForm.js';

class App extends Component {

	constructor() {
		super();
		this.state = {
			selectedMadLib: MadLibs[Math.floor((Math.random() * 3))],
			display: false
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

	onSubmit = (formData) => {
		console.log(formData);
		//  loop through all form Data {}
		formData.forEach( (newWord) => {
			this.updateWord(newWord["key"], newWord["value"])
		})
		this.setState({
			display: true
		})
	}

	render() {
		return (
			<section className="App">
				<h1>Welcome to MadLibs!</h1>
				<p>Fill in all of the choices to see your final story.</p>
				<WordsForm
					onSubmitCallback={ this.onSubmit }
					words={ this.state.selectedMadLib.words }
				/>

				<div className={ this.state.display.toString() }>
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
