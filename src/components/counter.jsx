import React, { Component } from "react";

class Counter extends Component {
  styleCounter() {
    if (this.props.value === 1) {
      return "btn btn-warning m-1";
    } else {
      return "btn btn-primary m-1";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.styleCounter()}>
          {this.props.value !== 0 ? this.props.value : "zero"}
        </div>

        <div className="btn btn-outline-primary">{this.props.counter.item}</div>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary m-1"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary m-1"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger m-1"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
