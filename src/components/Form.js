import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
  static propTypes = {
    words: PropTypes.array.isRequired
  }

  constructor(props) {
    super();
      this.state = {
        words: this.addValue(props.words),
    };
  }


  addValue = (words) => {
    for(let i=0; i < words.length; i++) {
      words[i].value = "";
    }
  }

  onChange = (event) => {
    console.log(`Got a input change event ${event.target.value}`);

    // const words = this.state.words.map((word) => {
    //   if (word.key === event.target.name) {
    //     word.value === event.target.value;
    //   }
    // });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission");
    console.log(event.target);
  }

  getFields = () => {

    let form = [];
    let words = this.props.words;

    for(let i=0; i < words.length; i++) {

     let key = words[i]["key"];
     let label = words[i]["label"];
     // don't have value as a part of state
     let value = this.state.value

      form.push(
        <div>
          <label htmlFor={key}>{label}:</label>
          <input name={key} value={value} type="text" onChange={this.onChange} />
        </div>
      )
    }
    return form;
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <div>{this.getFields()}</div>
        <input type="submit" value="Play Game" />
      </form>
    );
  }
}

export default Form;
