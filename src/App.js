import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    counters: [
      {
        id: 1,
        item: "Hot Dogs",
        value: 1,
      },
    ],
    temp: "",
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters.splice(index, 1);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 1) counters[index].value--;
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    counters.push({
      id: uuidv4(),
      value: 0,
    });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((c) => (c.value = 1));
    this.setState({ counters });
  };

  handleChange = (event) => {
    this.setState({ temp: event.target.value });
  };

  handleSubmitForm = () =>{

    const counters = [...this.state.counters];
    counters.push({
      id: counters.length,
      value: 1,
      item: this.state.temp
    }); 
    
    this.setState({counters})
  }


  render() {
    return (
      <div className="App">
           <NavBar
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          onChangeForm = {this.handleChange}
          onSubmitForm = {this.handleSubmitForm}
 
        />
        
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />

     
      </div>
    );
  }
}

export default App;
