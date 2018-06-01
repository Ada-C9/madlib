import React, { Component } from 'react';
import MadLibs from './../madlibs/MadLibs.js';

class Dropdown extends Component {
  render() {
    const info = MadLibs.map((story, key) => {
      return <div key={key}>{story.title}</div>
    });

    return (
      <section>
        <div>Dropdown</div>
        <div>
          { info }
        </div>
      </section>
    );
  }
}

export default Dropdown;
