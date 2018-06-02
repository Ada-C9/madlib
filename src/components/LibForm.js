import React, { Component } from 'react';
import './LibForm.css';
import PropTypes from 'prop-types';


class LibForm extends Component {

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
    completeStory: PropTypes.func.isRequired,
    selectedMadLib: PropTypes.object
  }


  createForm = (selectedMadLib) => {
    if (selectedMadLib === null) {
      return <div></div>;
    }
    const words = selectedMadLib["words"]
    const fields = words.map((field) => {
      return (
        <div key={field.key}>
          <input placeholder={field.label} onChange={(event)=>{this.props.updateWord(field.key, event.target.value)}}/>
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
