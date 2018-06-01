import React, { Component } from 'react';
import MadLibs from './../madlibs/MadLibs.js';

class Dropdown extends Component {

  selectMadLib = (event) => {
    console.log(event.target.value);
  }

  render() {
    const info = MadLibs.map((story, key) => {
      return <option key={key} value={story.title}>{story.title}</option>
    });

    return (
      <section onChange={ this.selectMadLib }>
        <select>
          <option disabled selected value> -- select an option -- </option>
          { info }
        </select>
      </section>
    );
  }
}

export default Dropdown;
