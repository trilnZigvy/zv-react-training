import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import { TaskBox } from "./components/taskBox/taskBox";
import { connect } from "react-redux";
import { todoAction } from "../redux-saga/todo/action";
import "./submission.css";

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  
  handleRemoveAll = () => {
    this.props.removeAll()
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    if (this.state.value) {
      this.props.addTask({value: this.state.value, status: "draft"});

      e.preventDefault();
    } else {
      alert("missing field");
      e.preventDefault();
    }
  };
  render() {
    return (
      <Container className="text-align-center">
        <form onSubmit={this.handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <div>
            <input
              // style={{ width: "92.5%" }}
              type="text"
              id="input-box"
              className="input-box"
              name="text"
              autoComplete="off"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit" className="btn btn__primary btn__lg">
            Add Task
          </Button>
          <Button onClick={this.handleRemoveAll} className="btn btn__primary btn__lg" style={{marginLeft:"5px"}}>
            Remove All
          </Button>
        </form>
        <TaskBox key={"taskBox"}/>
      </Container>
    );
  }
}

function mapSate(state) {
  // console.log(state);
  // const { online } = state.todoReducer;
  // // const user = false;
  // // console.log(user);
  // return { online };
  return {}
}

const actionCreators = {
  // login: userAction.login,
  addTask: todoAction.addTask,
  removeAll: todoAction.removeAll
};

const connectSubmisson = connect(mapSate, actionCreators)(Submission);
export { connectSubmisson as Submission };

export default Submission;
