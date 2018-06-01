import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super()

    this.state = {
      // inputWord: ''
    }

  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState(updatedState);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="label">{this.props.wordLabel}: </label>
          <input
            name="label"
            value={this.state.inputWord}
            onChange={(event) => {this.onFieldChange('label', event.target.value)}}
          />
        </form>
      </div>
    );
  }
}

// <input
//   // className="button success"
//   type="submit"
//   value="Submit"
//   />
export default Form;
