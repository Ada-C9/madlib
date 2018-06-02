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
    this.props.onFieldChange(this.props.index, value.trim());
  };


//   testShit = (event) => {
//     console.log(event);
// };

  render() {
    return (
      <section className="form-field"
               // onBlur={this.trimWord()}
      >
        <label htmlFor={this.props.formLabel}>{this.props.formLabel}</label>
        <input onChange={(event) => { this.onValueChange(event.target.value.trim()) }} //
               type="text"
        />
      </section>
    );
  }
}
export default FormField;
