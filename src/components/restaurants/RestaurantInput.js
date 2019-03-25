import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleKeyDown = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Restaurant Name</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleKeyDown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
