import React, { Component } from 'react';
import PropTypes from "prop-types";

class GetWordsForm extends Component {
  constructor(props){
    super();
    const state = {};
    props.words.forEach((word) =>{
      state[word.key] = "";
    })
    this.state = state;
    console.log(state);
  }

  onInputChange = (event) => {
    console.log(event.target.name);
    let key = event.target.name;
    let value = event.target.value;
    //let index = this.state.map((word) => word.key).indexOf(value);
    const update = {};
    update[key] = value;
    this.setState(update);

  }

  CallbackOnFormSubmit =(event) => {
    event.preventDefault();
    this.props.updatewords(this.state);
  }



  render(){
    let my_words = this.props.words.map((word, index) =>{
      const name = word.key;
      const value = this.state[name];
      const label = word.label;
      return(
        <div key={index}>
        <label htmlFor={name}>{label}</label>
        <input name={name} type="text" value={value} onChange={this.onInputChange}/>
        </div>
      );
    }
  )

  return(
    <form onSubmit = {this.CallbackOnFormSubmit}>
    {my_words}
    <input
    type="submit"
    value="Submit Form"/>
    </form>
  );
}
}

export default GetWordsForm;
