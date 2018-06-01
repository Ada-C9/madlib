import React, { Component } from 'react';
import './WordInput.css';
import PropTypes from 'prop-types';

class WordInput extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    wordKey: PropTypes.string.isRequired,
    onFieldChange: PropTypes.func.isRequired
  };

  onInputChange = (event) => {
    this.props.onFieldChange(this.props.wordKey, event.target.value);
  };

  render() {
    return(
      <div>
        <input type="text" onChange={this.onInputChange} placeholder={this.props.label} />
      </div>
    );
  }

}

export default WordInput;
