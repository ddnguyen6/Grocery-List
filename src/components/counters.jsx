import React, { Component } from "react";
import Counter from "./counter";
import { v4 as uuidv4 } from 'uuid';

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <React.Fragment>
          <p></p>
          <Counter 
            key={uuidv4()}
            value={counter.value}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Counters;
