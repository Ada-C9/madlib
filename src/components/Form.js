import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(){
    super();
  }

  static propTypes = {
    words: PropTypes.array.isRequired,
  }

  generateForm(){
    return(
      this.props.words.map((word)=>{
        return(
          <div key={word.key}>
            <label htmlFor={word.key}>{word.label}:</label>
            <input name={word.label}/>
          </div>
        );
      })
    );
  }

  render(){
    return(
      <div>
        <form>
          { this.generateForm() }
          <input
            className="button success"
            type="submit"
            value="Generate MadLib"
          />
        </form>
      </div>
    );
  }
}

export default Form;
