import React, {Component} from 'react';
import './StoryForm.css';
import PropTypes from 'prop-types'

class StoryForm extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    updateWord: PropTypes.func.isRequired,
    words: PropTypes.array.isRequired,
    visibility: PropTypes.func.isRequired,
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.visibility();
  }


  render() {
    console.log(this.props.words)
    const words = this.props.words.map((item) => {
      return(
        <section key={item.key} className="label-input">
          <label htmlFor={item.key}>{item.label}: </label>
          <input
            name={item.key}
            onChange={(event) => { this.props.updateWord(item.key, event.target.value)}}
          />
        </section>
      );
    });

    return (
      <form
        onSubmit={ this.onSubmit }
        className="story-form"
      >
      { words }
      <input
        className="button"
        type="submit"
        value="Submit Words"
      />
      </form>
    );
  }
}

export default StoryForm;
