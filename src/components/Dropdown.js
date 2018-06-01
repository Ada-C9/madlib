import React, { Component } from 'react';

class Dropdown extends Component {

  handleChange = (event) => {
   this.props.selectedNum(event.target.value)
  }

  render() {
    return (
      <div>
      <p>Select a Story</p>
      <select onChange={this.handleChange}>
        <option disabled selected value>Select a Story </option>
        <option value={0}>Vacations</option>
        <option value={1}>Atrocious Art</option>
        <option value={2}>Bad Dog</option>
        <option value={3}>Breaking News</option>
      </select>
      </div>
    );
  }
}

export default Dropdown;
