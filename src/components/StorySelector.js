import React, { Component } from 'react';
import './StorySelector.css';
import PropTypes from 'prop-types';

class StorySelector extends Component {
  constructor() {
    super();
    this.state = {
      selectedStory: 0
    }
  }

  static propTypes = {
    stories: PropTypes.arrayOf( PropTypes.shape(
        {
          title: PropTypes.string.isRequired,
          index: PropTypes.number.isRequired
        }
      )).isRequired,
      setStoryIndex: PropTypes.func.isRequired
  };

  changeStory = (event) => {
    this.setState({
      selectedStory: event.target.value
    });

    this.props.setStoryIndex(event.target.value);
  }

  // seeData = () => {
  //   console.log(this.props.stories)
  // }

  render() {
    const options = this.props.stories.map(function(story) {
      return <option key={ story.index } value={ story.index }>{ story.title }</option>
    });

    return(
        <select onChange={this.changeStory}>
          { options }
        </select>
    );
  }

}

export default StorySelector;
