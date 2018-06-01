import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MadLibs from '../madlibs/MadLibs.js';

class Dropdown extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 'Vacations'
    };
  }

  static propTypes = {
    getStory: PropTypes.func.isRequired,
  }

  changeValue = (event) => {
    console.log(this.state.value);
    this.setState({
      value: event.target.value
    });

    for(let i = 0; i < MadLibs.length; i++){
      if(MadLibs[i].title === event.target.value){
        this.props.getStory(i);
      }
    }
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
