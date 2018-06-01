import React, { Component } from 'react';
import './WordInput.css';
import PropTypes from 'prop-types';

class WordInput extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    wordKey: PropTypes.string.isRequired,
  }

  render() {
    return(
      <div>
        <label forName={this.props.wordKey}>{this.props.label}</label>
        <input type="text" />
      </div>
    );
  }

}

export default WordInput;
