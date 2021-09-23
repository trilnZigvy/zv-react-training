import React, { Component } from "react";
import { TodoTask } from "../component/toDoTask/todoTask";
import { todoAction } from "../redux/actions/todo.actions";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import './todo.css'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", getCompleted: false, items: [] };
  }

  async componentDidMount() {
    await this.props.getAll();

    // await this.setState({ items: this.props.items });
    // console.log(this.state.items);
  }

  componentDidUpdate(prevProps, prevState) {
    // this.state.items = this.props.items;
    if (prevProps.items !== this.props.items) {
      console.log("props", prevProps);
      console.log("state", this.props);
      this.setState({ items: this.props.items });
    }

    //  this.setState({ items: this.props.items });
  }

  handleCompleted = async () => {
    await this.setState({ getCompleted: !this.state.getCompleted });
    if (this.state.getCompleted) {
      this.setState({
        items: this.props.items.filter((task) => task.completed === true),
      });
    } else {
      this.setState({
        items: this.props.items,
      });
    }
    
  };

  handleSubmit = (e) => {
    if (this.state.value) {
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
    if (e.target.value === "") {
      this.setState({ items: this.props.items });
    } else {
      this.setState({
        items: this.props.items.filter(
          (task) => task.value.search(e.target.value) > -1
        ),
      });
    }
  };

  render() {
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
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
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit" className="btn btn__primary btn__lg">
            Add
          </Button>
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
            style={{ width: "92%" }}
            onChange={this.handleSearch}
          />
        </div>
        {/* <h2 id="list-heading">3 tasks remaining</h2> */}
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {!this.state.items ? <div>Loading</div> : <div></div>}
          {this.state.items &&
            this.state.items.map((task) => {
              // console.log("completed", this.state.getCompleted);
              return (
                <TodoTask
                  key={task.id}
                  task={task}
                  value={task.value}
                  completed={task.completed}
                />
              );
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
