import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './StoryForm.css';


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
      this.props.addWords({
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
      <div>
      <label htmlFor="adjective_1">Adjective 1:</label>
      <input
      name="adjective_1"
      onChange={(event) => {this.onFieldChange('adjective_1', event.target.value)}}
      value={this.state.adjective_1}
      />
      </div>
      <div>
      <label htmlFor="adjective_2">Adjective 2:</label>
      <input
      adjective_2="adjective_2"
      onChange={(event) => {this.onFieldChange('adjective_1', event.target.value)}}
      value={this.state.adjective_1}
      />
      </div>
      <div>
      <label htmlFor="noun_1">Noun 1:</label>
      <input
      noun_1="noun_1"
      // onChange={this.onEmailChange}
      onChange={(event) => {this.onFieldChange('', event.target.value)}}
      value={this.state.noun_1}
      // className={this.emailValid() ? "valid" : "invalid"}
      />
      </div>
      <div>
      <label htmlFor="noun_2">Noun 2:</label>
      <input
      noun_2="noun_2"
      onChange={(event) => {this.onFieldChange('adjective_1', event.target.value)}}
      value={this.state.noun_2}
      />
      </div>
      <input
      className="button success"
      type="submit"
      value="Apply to Madlib Story"
      />
      </form>
      </div>
    );
  }
}


export default StoryForm;
