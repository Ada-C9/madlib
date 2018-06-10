import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibSelector extends Component {
  static propTypes = {
    madLibs: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectMadLibCallback: PropTypes.func.isRequired,
  }

  render() {
    const options = this.props.madLibs.map((madLib, index) => {
      return (
        <option key={ index } value={ index }>{ madLib.title }</option>
      );
    });

    return (
      <div>
        <p>Select your Mad Lib:</p>
        <select onChange={ this.onSelectChange }>
          { options }
        </select>
      </div>
    );
  }

  onSelectChange = (event) => {
    this.props.selectMadLibCallback(event.target.value);
  }
}

export default MadLibSelector;
