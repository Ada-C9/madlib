import React, { Component } from 'react';
import './WordInput.css';
import PropTypes from 'prop-types';

class WordInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wordInput: ""
    };
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    wordKey: PropTypes.string.isRequired,
    onFieldChange: PropTypes.func.isRequired
  };

  onInputChange = (event) => {
    this.setState({
      wordInput: event.target.value
    });

    this.props.onFieldChange(this.props.wordKey, this.state.wordInput);
  };

  render() {
    return(
      <div>
        <input type="text" onChange={this.onInputChange} placeholder={this.props.label}/>
      </div>
    );
  }

}

export default WordInput;
