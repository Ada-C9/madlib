import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MadLibs from '../madlibs/MadLibs.js';

class Form extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <form className="form">
        <div>
          <label htmlFor="adjective_1">Adjective 1</label>
          <input name="adjective_1" type="text"/>
        </div>
        <input type="submit" value="submit" />
      </form>
      </div>
    );
  }
}

export default Form;
