import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NewStudentForm.css';


class StoryForm extends Component {
  constructor() {
    super();
    this.state = {
      adjective_1: '',
      adjective_2: '',
      noun_1: '',
      noun_2: '',
    };
  }

  static propTypes = {
    addWords: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;
    this.setState(updatedState);
    console.log('updated = ${key}');
  }

  // onAgeChange = (event) => {
  //   const age = event.target.value;
  //   this.setState({
  //     age,
  //   });
  // }
  //
  // see the email to see the other way to
  // onEmailChange = (event) => {
  //   const email = event.target.value;
  //   this.setState({
  //     email,
  //   });
  // }

  // emailValid = () => {
  //   return this.state.email.match(/\S+@\S+/);
  // }

  onSubmit = (event) => {
    event.preventDefault();
      this.props.addStudent({
        adjective_1: this.state.adjective_1,
        adjective_2: this.state.adjective_2,
        noun_1: this.state.noun_1,
        noun_2: this.state.noun_2,
      });
      this.setState({
        adjective_1: '',
        adjective_2: '',
        noun_1: '',
        noun_2: '',
      });
  }

  render() {
    return (
      <div>
      <form
      onSubmit={this.onSubmit}
      className="new-word-form">
      <p>Word Form:</p>
      <div>
      <label htmlFor="adjective_1">Adjective 1:</label>
      <input
      name="adjective_1"
      onChange={(event) => {this.onFieldChange('adjective_1', event.target.value)}}
      value={this.state.adjective_1}
      />
      </div>
      <div>
      <label htmlFor="age">Age:</label>
      <input
      age="age"
      onChange={(event) => {this.onFieldChange('age', event.target.value)}}
      value={this.state.age}
      />
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input
      email="email"
      // onChange={this.onEmailChange}
      onChange={(event) => {this.onFieldChange('email', event.target.value)}}
      value={this.state.email}
      className={this.emailValid() ? "valid" : "invalid"}
      />
      </div>
      <input
      className="button success"
      type="submit"
      value="Add Student"
      />
      </form>
      </div>
    );
  }
}


export default NewStudentForm;
