import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MadLibsForm extends Component {
  static propTypes = {
    wordsNeeded: PropTypes.array.isRequired,
  };

  render() {
    const wordInputs = this.props.wordsNeeded.map((wordObject) => {
      return(<div>
        <input
        key={wordObject['key']}
        name={wordObject['key']}
        placeholder={wordObject['label']} />
      </div>);
    });

    return (
      <form>
        { wordInputs }
        <input type="submit" />
      </form>
    );
  }
}

export default MadLibsForm;
