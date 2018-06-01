import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibForm extends Component {

	static propTypes = {
		wordCollection: PropTypes.array.isRequired,
		updateWordCallback: PropTypes.func.isRequired
	}

	constructor(props) {
		super();
		this.state = {
			words: props.wordCollection,
			updateWordCallback: props.updateWordCallback
		}
	}

	onInputChange = (event) => {
		const key = event.target.name;
		const newVal = event.target.value;

		const newState = {};
		newState[key] = newVal
		this.setState(newState)

	}

	onFormSubmit = (event) => {
		event.preventDefault();

		this.state.words.map((word, index) =>{
			const key = word.key
			const value = this.state[key]

			console.log(key);
			console.log(value);
			this.state.updateWordCallback(key, value)
		});

	}


	render(){

		const wordsGenerated = this.props.wordCollection.map((word, index) => {
			return <div key={index}>
				<input
					name={word.key}
					type="text"
					value={this.state.value}
					placeholder={word.label}
					onChange={this.onInputChange}
					/>
			</div>
		});

		return(
			<form onSubmit={this.onFormSubmit}>
				{wordsGenerated}
				<input type="submit" value="Make A MadLib!"/>
			</form>
		)
	}
}




export default MadLibForm;
