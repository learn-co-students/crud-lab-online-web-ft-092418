import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props){
    super(props);
    this.state={text: ''};
  };

handleOnChange(event){
  this.state={text: event.target.value};
}

handleOnSubmit(event){
  event.preventDefault();
  this.props.addRestaurant(this.state.text);
  this.state={text: ''};
}

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>

          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
