import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>

          <input
            type="text"
            value={this.state.value}
            onChange={this.props.onChangeForm}
          />
          
        </label>
        {/* <input className="btn btn-primary m-1" type="submit" value="Add" /> */}
      </form>
    );
  }
}

export default Form;
