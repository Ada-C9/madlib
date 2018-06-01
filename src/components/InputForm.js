import React, { Component } from 'react';
import MadLibs from '../madlibs/MadLibs.js';
import PropTypes from 'prop-types';
import App from '../App.js';

export default class InputForm extends Component {

  constructor(props){
    super(props);
    let allWords = props.words;
    this.state = {};
    // allWords.forEach((word)=> {
    //   this.state[word.key] = '';
    // });
  }

  onInputChange = (event) => {
  const newState = {};
  newState[event.target.name] = event.target.value;
  this.setState(newState);
  let key = event.target.name;
  let value = event.target.value;
  this.props.callBack(key, value);
    }

  // onFormSubmit = (event) => {

  // }


  render(){
    let words = this.props.words;

    let allInputs = words.map((word)=> {
      let key = word.key;
      let label = word.label;
      return <div key={key}>
          <label htmlFor={label}>{label}</label>
          <input name={key} value={this.state[key] || ''} onChange={this.onInputChange}/>
      </div>;
    });

    return(
      <div>
        <form id="madlib-form">
          { allInputs }
          <input type="submit" value="Create MadLib!" />
        </form>
      </div>
    );
  }
}
