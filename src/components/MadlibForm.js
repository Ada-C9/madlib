import React, { Component } from 'react';
import  './MadlibForm.css';
import PropTypes from 'prop-types'

class MadlibForm extends Component {

  constructor() {
    super();
    this.state = {
      // name: '',
      // email: '',
    };
  }

  static propTypes = {
    // addStudent: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    this.setState({
      updatedState,
    });

    console.log(`Updated: ${key}`);
    // console.log(`state: ${this.state.name}`);

  }

  wordValid = () => {
    return this.state.email.match(/\S+@\S+/)
  }

  // makeStates()

  // makeForm(this.props.title) {
  //
  // }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   if (this.wordValid()) {
  //     this.props.updateMadLib({
  //       name: this.state.name,
  //       email: this.state.email,
  //     })
  //     this.setState({
  //       name: '',
  //       email: '',
  //     })
  //   }
  // }

  render() {
    console.log(this.props.selectedMadLib.words)

    const inputs = this.props.selectedMadLib.words.map(function(item) {
      return <div key={ item.key }>
              <label htmlFor={item.label}>{item.label}: </label>
              <input name={item.label} onChange={(event) => {this.onFieldChange("thing", event.target.value)}}/>
            </div>
    });

    return (
      <div>
        <form onSubmit={this.onSubmit}
        className="new-madlib-form">
          <p>{inputs}</p>
        </form>
      </div>
    );
  }
}

export default MadlibForm;
