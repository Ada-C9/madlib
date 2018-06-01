import React from 'react';
import PropTypes from 'prop-types';

class MadLibForm extends React.Component {
  static propTypes = {
    words: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    const initialState = {};
    props.words.forEach((word) => {
      initialState[word.key] = ''
    });
    this.state = initialState;
  }

  render() {

    return(
      <form>
        <input name={ this.props.words[0].key }
               type='text'
               placeholder={ this.props.words[0].label }
        />
      </form>
    );
  }
}

export default MadLibForm
