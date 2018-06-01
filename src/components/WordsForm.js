import React from 'react';
import PropTypes from 'prop-types';
import './WordsForm.css';

class WordsForm extends React.Component {
	constructor(props) {
		super();
		console.log(props);

		this.state = {
			words: props.words
		}
	}

	static propTypes = {
		onSubmitCallback: PropTypes.func,
		words: PropTypes.array,
	}

	updateWord = (key, value) => {
		const updatedWords = this.state.words;
		const changedWord = updatedWords.find((word) => {
			return word.key === key
		});
		changedWord.value = value;
		this.setState({words: updatedWords});
	}

	onInputChange = (event) => {
		const key = event.target.name;
		const value = event.target.value;
		console.log(`input change ${key}: ${value}`);
		this.updateWord(key, value);
	}

	onFormSubmit = (event) => {
		event.preventDefault();
    const newWords = {};

		this.props.onSubmitCallback();
	}

	render() {
		const formData = this.state.words.map( (pair, index) => {
			return <input
				key={ index }
				name={ pair["key"] }
				placeholder={ pair["label"] }
				type="text"
				value={ pair["value"] || '' }
				onChange={ this.onInputChange }
			/>
		})

		return (
			<div>
				<form onSubmit={ this.onFormSubmit }>
					{ formData }
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}

export default WordsForm;
