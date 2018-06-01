import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './MadLibForm.css';

class FormField extends Component {

   static propTypes = {
     formKey: PropTypes.string.isRequired,
     formLabel: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired
  };

  render() {
    console.log(this.props.formKey);

    return (
      <section className="form-field">
        <label htmlFor={this.props.formLabel}>{this.props.formLabel}</label>
        <input
          name={this.props.formKey}
          onChange={(event) => { this.onFieldChange(this.props.index, event.target.value) }}
          value={this.props.formKey}
          // className={this.emailValid() ? 'valid': 'invalid'}
        />
      </section>
    );
  }
}
export default FormField;
