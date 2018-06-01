import React, { Component } from 'react';

class Form extends Component {

  constructor(prop) {
    super(prop)

  }

  render() {

    return (
      <div>
        <form>
          <label htmlFor="label">{this.props.label}</label>
          <input/>
        </form>
      </div>
    );
  }
}


export default Form;
