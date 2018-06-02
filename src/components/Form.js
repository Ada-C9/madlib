import React, { Component } from 'react';
import './Story.css';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(){
    super()
      this.state ={
        adjective_1:"",
        adjective_2:"",
        noun_1:"",
        noun_2:"",
      }
    }

handleSubmit = (event) => {
  event.preventDefault();
  const newMadlib = {
    adjective_1: this.state.adjective_1,
    adjective_2: this.state.adjective_2,
    noun_1: this.state.noun_1,
    noun_2: this.state.noun_2,
  }
    this.setState({
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: '',
    })
}

  adjective_1Change = (event) =>{
      this.setState({
        adjective_1:event.target.value,
      })
    }

  adjective_2Change = (event) =>{
        this.setState({
          adjective_2:event.target.value,
        })
      }

  noun_1Change = (event) =>{
        this.setState({
          noun_1:event.target.value,
        })
      }

  noun_2Change = (event) =>{
        this.setState({
          noun_2:event.target.value,
        })
      }

  render(){
    const currentMADLIB =
    return(
       <div>
      <form className="new-madlib" onSubmit={this.handleSubmit} >
        <div>
        <label htmlFor="first-adj">adjective_1:</label>
        <input name="first-adj" onChange={this.adjective_1Change} value={this.state.adjective_1}/>
        </div>

        <div>
        <label htmlFor="second-adj">ajdective_2:</label>
        <input name="second-adj" onChange={this.adjective_2Change} value={this.state.adjective_2}/>
        </div>

        <div>
        <label htmlFor="first-noun">noun_1:</label>
        <input name="first-noun" onChange={this.noun_1Change} value={this.state.noun_1}/>
        </div>

        <div>
        <label htmlFor="second-noun">noun_2:</label>
        <input name="second-noun" onChange={this.noun_2Change} value={this.state.noun_2}/>
        </div>

        <input
          className="button success"
          type="submit"
          value="new madlib"
          />
      </form>
      </div>)
  }
}

export default Form;
