import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewStoryForm.css';

class NewStoryForm extends Component {

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    this.props.updateWord(key, value);
  }

  render() {
    return (
      <section>
        <form  className="new-story-form">
          <label placeholder="Adjective 1"></label>
          <input
           name="adjective_1"
           onChange={(event) => { this.onFieldChange('adjective_1', event.target.value) }}
           />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default NewStoryForm;