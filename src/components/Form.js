import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(){
    super();
  }

  static propTypes = {
    words: PropTypes.array.isRequired,
  }

  render(){
    return(
      <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name"/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email"/>
        </div>
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
