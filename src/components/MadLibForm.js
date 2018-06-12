import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibForm extends Component {
  static propTypes = {
    madLib: PropTypes.object.isRequired,
    completeMadLibCallback: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    let inputs = {};
    props.madLib.words.forEach((word) => {
      inputs[word.key] = '';
    });

    this.state = inputs;
  }

  render() {
    const inputs = this.props.madLib.words.map((word) => {
      return (
        <div key={ `${this.props.madLib.title}-${word.key}` }>
          <input
            type="text"
            placeholder={ word.label }
            onChange={ (event) => { this.setState({[word.key]: event.target.value}); } }
            value={ this.state[word.key] }
          />
        </div>
      );
    });


    return (
      <form onSubmit={ this.onFormSubmit }>
        {inputs}
        <input type="submit" value="Complete Mad Lib!" />
      </form>
    );
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.completeMadLibCallback();
  }
}

export default MadLibForm;
