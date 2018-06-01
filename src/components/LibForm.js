import React, { Component } from 'react';
import './LibForm.css';
import PropTypes from 'prop-types';

class LibForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  createForm = (selectedMadLib) => {
    const words = selectedMadLib["words"]
    console.log(words);
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

  render() {
    return (
      <div>
      <form>
        {this.createForm(this.props.selectedMadLib)}
        <input type='submit' value='Create Story' />

      </form>
      </div>
    );
  }
}

export default LibForm;
