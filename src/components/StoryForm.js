import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './StoryForm.css';


class StoryForm extends Component {
  constructor() {
    super();

  }

  // static propTypes = {
  //   selectedMadLib: Proptypes.object.isRequired,
  //   updateWord: Proptypes.func.isRequired
  // }


  onSubmit = (event) => {
    event.preventDefault();
    this.props.changeVisibility();
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
      className="new-story-form"
      onSubmit={this.onSubmit}
      >
      {words}
      <input type="submit" className="button" />
      </form>
    );
  }
}


export default StoryForm;
