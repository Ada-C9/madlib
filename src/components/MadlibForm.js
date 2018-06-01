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
  }


  render() {


    const formComponents = this.state.words.map((word) => {
      return (
        <div key={word.label}>
            <label htmlFor="name">{word.key}</label>
            <input
              name="name"
              placeholder={word.label}
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
