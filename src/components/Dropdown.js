import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MadLibs from '../madlibs/MadLibs.js';

class Dropdown extends Component {
  constructor(){
    super();

    this.state = {
      value: 'Vacations'
    };
  }

  static propTypes = {
    getStory: PropTypes.func.isRequired,
  }

   // this.setState({value: event.target.value});

  changeValue = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });

    let num;
    for(let i=0; i<MadLibs.length; i++){
      if(MadLibs[i].title === this.state.value){
        num = i;
      }
    }
    this.props.getStory(num)
  }

  render(){
    return(
      <select value={this.state.value} onChange = { this.changeValue }>
      {
        MadLibs.map((madlib)=>{
          return(
            <option key ={madlib.title} value = { madlib.title }>
              { madlib.title }
            </option>
          );
        })
      }
      </select>
    );
  }
}

export default Dropdown;
