import React, { Component } from 'react';


class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleKeyDown = (e) => {
    this.setState({
      text: e.target.value
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
          <label>Name of Restaurant:</label>
          <br />
          <input type="text" value={this.state.text} onChange={this.handleKeyDown}/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
