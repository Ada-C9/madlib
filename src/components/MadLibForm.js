import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MadLibForm extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    updateWord: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  onWordChange = (key, value) => {
    this.props.updateWord(key, value);
  }

  render() {
    console.log(this.props);
    const labels = this.props.data.map((item) => {
      console.log(item.key);
      return (
        <div><label htmlFor={item.key}>{item.label}: </label>
        <input name='word'
          onChange={(event) => {this.onWordChange(item.key, event.target.value)}}
        />
        </div>
      )
    });

    return (
      <div>
        <form onSubmit={this.onSubmit}className="new-madlib-form">
        {labels}
        <br/>
        <button>Submit</button>
        </form>
        <br/>
      </div>
    )
  }
}

export default MadLibForm;
