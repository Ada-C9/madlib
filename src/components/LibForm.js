import React, { Component } from 'react';
import './LibForm.css';

class LibForm extends Component {

  createForm = (selectedMadLib) => {
    if (selectedMadLib === null) {
      return <div></div>;
    }
    const words = selectedMadLib["words"]
    const fields = words.map((field) => {
      return (
        <div key={field.key}>
          <label htmlFor={field.label}>{field.label}</label>
          <input onChange={(event)=>{this.props.updateWord(field.key, event.target.value)}}/>
        </div>
      );
    });

    return fields
  }

  submitStory = (event) => {
    event.preventDefault();
    this.props.completeStory();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitStory}>
        {this.createForm(this.props.selectedMadLib)}
        <input type='submit' value='Create Story' />
      </form>
      </div>
    );
  }
}

export default LibForm;
