import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

class FormField extends Component {

  static propTypes = {
    formLabel: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onFieldChange: PropTypes.func.isRequired
  };

  onValueChange = (value) => {
    // if(this.hasNonEmptyInput(value)) {
      this.props.onFieldChange(this.props.index, value.trim());
    // }
  };



  render() {
    return (
      <section className="form-field">
        <label htmlFor={this.props.formLabel}>{this.props.formLabel}</label>
        <input onChange={(event) => { this.onValueChange(event.target.value) }} //
               type="text"
               // className={this.fieldValid() ? 'valid': 'invalid'}
        />
      </section>
    );
  }
}
export default FormField;
