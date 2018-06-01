import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './StoryForm.css';


class StoryForm extends Component {
  constructor() {
    super();


  }

  static propTypes = {
    selectedMadLib: Proptypes.object.isRequired,
    updateWord: Proptypes.func.isRequired,
  }




  onSubmit = (event) => {
    event.preventDefault();
      this.props.updateWord({
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


  // selectedMadLib.words.each(key, label)

  render() {

    let words = this.props.words;
    let inputs = words.map((word) => {
          return(
            <section key={word.key} className="label-input">
              <label>{word.label}</label>
              <input
               name={word.key}
               onChange={(event) => { this.onFieldChange(word.key, event.target.value) }}
               
            </section>
          );


    return (
      <div>
      <form
      onSubmit={this.onSubmit}
      className="new-word-form">
      <div>
      <label htmlFor="adjective_1">Adjective 1:</label>
      <input
      name="adjective_1"
      onChange={(event) => {this.updateWord('adjective_1', event.target.value)}}
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
