import React, { Component } from 'react';
import  './MadlibForm.css';
import PropTypes from 'prop-types'

class MadlibForm extends Component {

  constructor() {
    super();
  }

  static propTypes = {
    // addStudent: PropTypes.func.isRequired,
  }

  wordValid = () => {
    return this.state.email.match(/\S+@\S+/)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.renderStory()
  }

  render() {
    console.log(this.props.words)

    const inputs = this.props.words.map (item => {
      return <div key={ item.key }>
              <label htmlFor={item.key}>
                {item.label}:
              </label>
              <input
                name={item.label}
                // placeholder={item.label}
                onChange={(event) =>
                  { this.props.updateWord(item.key, event.target.value) }}
              />
            </div>
    });

    return (
      <div>
        <form onSubmit={this.onSubmit}
        className="new-madlib-form">
          {inputs}
          <input
            className="button success"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default MadlibForm;
