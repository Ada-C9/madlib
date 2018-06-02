import React, { Component } from 'react';
import PropTypes from "prop-types";

class GetWordsForm extends Component {
//   onChangeHandler = (event) => {
//     console.log(event);
//   }
//
//   render(){
//
//     const words = this.props.words.map((word) =>{
//       console.log(word.target);
//     const  value="";
//       return(
//         <div>
//         <label name = {word.key}>{word.label}l</label>
//         <input type="text" name={word.key} value={value} onChange={this.onChangeHandler}/>
//         </div>
//       )
//     })
//
//
//   return(
//     <form>
//     {words}
//     <input
//     type="submit"
//     value="Submit Form"/>
//     </form>
//   );
// }
// }
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
