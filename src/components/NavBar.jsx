import React, { Component } from "react";
import Form from './Form'

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <p className="btn btn-primary m-1">{this.props.totalCount}</p>
          {/* <button onClick={this.props.onAdd} className="btn btn-danger m-1">
            Add
          </button> */}
          <Form 
          onChangeForm = {this.props.onChangeForm}
          ></Form>

          <button className="btn btn-primary m-1" onClick={this.props.onSubmitForm}>Add</button>

          <button onClick={this.props.onReset} className="btn btn-danger m-1">
            Reset
          </button>
        
        </nav>
      </div>
    );
  }
}

export default NavBar;
