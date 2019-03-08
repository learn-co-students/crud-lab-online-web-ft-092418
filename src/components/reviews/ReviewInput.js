import React, { Component } from 'react';

class ReviewInput extends Component {
    state = {
      text: ""
    }

  handleKeyDown = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state.text)
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleKeyDown} value={this.state.text}/>
          <br />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
