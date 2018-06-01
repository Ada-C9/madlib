import React, { Component } from 'react';
import './Menu.css'
import PropTypes from 'prop-types';

class Menu extends Component {

  render() {

    return (
      <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    )
  }

}

export default Menu;
