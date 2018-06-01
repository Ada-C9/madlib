import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadlibForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: this.props.words
    }
  }

  static propTypes = {
    words: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
  }



  render() {

    const formComponents = this.state.words.map((word) => {
      return (
        <div key={word.key}>
            <label htmlFor={word.key}>{word.label}</label>
            <input name={word.key} placeholder={word.label}
            onChange={(event) => {this.props.update(word.key, event.target.value)}}
            />
        </div>
      );
    });


    return (
      <article>

        {formComponents}

      </article>
    );
  }
}

export default MadlibForm;
