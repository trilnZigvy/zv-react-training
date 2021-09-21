import React, { Component } from "react";
import { TodoTask } from "../component/toDoTask/todoTask";
import { todoAction } from "../redux/actions/todo.actions";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", getCompleted: false, items: [] };
  }

  componentDidMount() {
    this.props.getAll();
    this.setState({ items: this.props.items });
    // console.log("items", this.props.items);
  }

  handleCompleted = () => {
    this.setState({ getCompleted: !this.state.getCompleted });
  };

  handleSubmit = (e) => {
    if (this.state.value) {
      console.log("val: ", this.state.value);
      this.props.addTask(this.state.value);

      e.preventDefault();
    } else {
      alert("missing field");
      e.preventDefault();
    }
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSearch = (e) => {
    if (e.target.value == "") {
      console.log("as");
      this.setState({ items: this.props.items });
    } else {
      this.setState({
        items: this.state.items.filter(
          (task) => task.value.search(e.target.value) > -1
        ),
      });
    }
  };

  render() {
    return (
      <div className="todoapp stack-large">
        {console.log(this.props.items)}
        <h1>TodoMatic</h1>
        <form onSubmit={this.handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Search</span>
            <span className="visually-hidden"> tasks</span>
          </button>

          <button
            onClick={this.handleCompleted}
            type="button"
            className="btn toggle-btn"
            aria-pressed="false"
          >
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <div>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Search By Name"
            // value={this.state.value}
            onChange={this.handleSearch}
          />
        </div>
        {/* <h2 id="list-heading">3 tasks remaining</h2> */}
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {console.log(this.state.items)}
          {this.state.items &&
            this.state.items.map((task) => {
              console.log("completed", this.state.getCompleted);
              if (this.state.getCompleted) {
                if (task.completed) {
                  return (
                    <TodoTask
                      key={task.id}
                      task={task}
                      value={task.value}
                      completed={task.completed}
                    />
                  );
                }
              } else {
                return (
                  <TodoTask
                    key={task.id}
                    task={task}
                    value={task.value}
                    completed={task.completed}
                  />
                );
              }
              return <div></div>;
            })}

          {/* <TodoTask value={"Yolo"} completed={true} />
          <TodoTask value={"Yolo 1"} completed={false} />
          <TodoTask value={"Yolo 2"} completed={true} /> */}
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  console.log("state", state.todoReducer);
  const { items } = state.todoReducer;
  //   console.log("items",items);
  return { items };
}

const actionCreators = {
  getAll: todoAction.getAll,
  addTask: todoAction.addTask,
};

const connectedTodos = connect(mapState, actionCreators)(Todo);
export { connectedTodos as Todo };
