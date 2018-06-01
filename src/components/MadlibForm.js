import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadlibForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: this.props.words,
    }
  }

  static propTypes = {
    words: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired,
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.show()
  }


  render() {

    const formComponents = this.state.words.map((word) => {
      return (
        <div key = {word.key}>
          <label htmlFor={ word.key }>{ word.label }: </label>
          <input name={ word.key }
          onChange={ (event) => { this.props.update(word.key, event.target.value) } }
          />
        </div>
      );
    });


    return (
      <article>
        <form
          onSubmit={ this.onSubmit }
          className="new-madlib-form">

          {formComponents}

          <input
            className="button success"
            type="submit"
            value="Get Madlib"
          />
        </form>
      </article>
    );
  }
}

export default MadlibForm;
