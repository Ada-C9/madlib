import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

class FormField extends Component {

  static propTypes = {
    formLabel: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onFormFieldChange: PropTypes.func.isRequired
  };

  onFormValueChange = (value) => {
    if(this.hasValidInput(value)) {
      this.props.onFormFieldChange(this.props.index, value.trim());
    }
  };

  hasValidInput = (value) => {
    return value.match(/\w+?/);
  };

  render() {
    return (
      <section className="form-field">
        <label htmlFor={this.props.formLabel}>{this.props.formLabel}</label>
        <input onChange={(event) => { this.onFormValueChange(event.target.value) }} //
               type="text"
               // className={this.fieldValid() ? 'valid': 'invalid'}
        />
      </section>
    );
  }
}
export default FormField;
