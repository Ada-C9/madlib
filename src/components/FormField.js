import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './MadLibForm.css';

class FormField extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     // formKey: this.props.formKey,
  //     formLabel: this.props.formLabel,
  //     value: ""
  //   };
  // }

  static propTypes = {
     formLabel: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
  };

  onFormValueChange = (value) => {
    this.props.onFormFieldChange(this.props.index, value);
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
