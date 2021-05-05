import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "erw", name: "Sulmaz", age: 28 },
      { id: "343dr", name: "Jafar", age: 30 },
      { id: "rcf", name: "Akbar", age: 32 },
    ],
    otherAtt: "some Other Values",
  };

  switchNameHandler = (newValue) => {
    this.setState({
      persons: [
        { name: "Sulmaz", age: 28 },
        { name: "Jafar", age: 30 },
        { name: newValue, age: 33 },
      ],
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id == id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "red",
      ":hover": {
        backgroundColor: "green",
      },
    };

    let persons = null;
    const assignedClasses = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          ></Persons>
        </div>
      );
      style.backgroundColor = "salmon";
      style[":hover"] = {
        backgroundColor: "blue",
        color: "white",
      };
      assignedClasses.push(classes.red);
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React Developer</h1>
        <p className={assignedClasses}>testing red bold style...</p>
        <button
          className={classes.button}
          onClick={() => this.switchNameHandler("Soheila")}
        >
          Switch Name
        </button>
        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>
        {persons}
        {/* // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("H1", null, "Hi,I'm a React Developer")
    // ); */}
      </div>
    );
  }
}

export default App;
