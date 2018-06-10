import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired,
    updateAllWords: PropTypes.func.isRequired
  }

  constructor(props) {
    super();
    this.state = {
      words: props.words.map(word => { return { ...word, value: "" }; }) /*this.addValue(props.words)*/
    };
  }

  /*addValue = (words) => {
    for(let i=0; i < words.length; i++) {
      words[i].value = "";
    }
  }*/

  onChange = (event) => {
    console.log(`Got a input change event ${event.target.value}`);

    const words = this.state.words.map((word) => {
      if (word.key === event.target.name) {
        // take all the keys and values in word currently, add value, and create new object
        // since value: is the second argument, it will overwrite any previous value keys
        return {...word, value: event.target.value};
      }
      else {
        return word;
      }
    });
    this.setState({ words: words });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission");
    console.log(event.target);
    this.props.updateAllWords(this.state.words);
  }

  getFields = () => {

    let form = [];
    let words = this.state.words;

    for(let i=0; i < words.length; i++) {

     let key = words[i]["key"];
     let label = words[i]["label"];
     let value = words[i]["value"];

      form.push(
        <div>
          <label htmlFor={key}>{label}:</label>
          <input name={key} value={value} type="text" onChange={this.onChange} />
        </div>
      )
    }
    return form;
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <div>{this.getFields()}</div>
        <input className="button" type="submit" value="Play Game" />
      </form>
    );
  }
}

export default Form;
