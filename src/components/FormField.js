import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './MadLibForm.css';

class FormField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formKey: this.props.formKey,
      formLabel: this.props.formLabel,
      formInput: ""
    };
  }

  static propTypes = {
     formKey: PropTypes.string.isRequired,
     formLabel: PropTypes.string.isRequired,
     index: PropTypes.number.isRequired,
     // onFormFieldChange: PropTypes.func.isRequired
  };

  onFormValueChange = (value) => {

    console.log('bar');
    console.log(value);
    console.log(this.state);
    console.log('*');
    const updatedState = {};
    updatedState[this.state.formInput] = value;
    this.setState({formInput: value});

    // console.log(`Updated = ${key} ${value}`);
    // console.log(this.props.formLabel);
    // this.state.formInput = event.target.value;
    // this.props.onFormFieldChange(this.props.index, event.target.value);
  };

  render() {
    console.log(this.props.formKey);

    return (
      <section className="form-field">
        <label htmlFor={this.props.formLabel}>{this.props.formLabel}</label>
        <input onChange={(event) => { this.onFormValueChange(event.target.value) }} //
               type="text"
               // name={this.props.formKey}
               value={this.state.formInput}
          // onChange={(event) => { this.props.onFormFieldChange(this.props.index, event.target.value) }}
          // className={this.emailValid() ? 'valid': 'invalid'}
        />
      </section>
    );
  }
}
export default FormField;
