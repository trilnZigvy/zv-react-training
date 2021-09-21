import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { todoAction } from "../../redux/actions/todo.actions";
class TodoTask extends Component {
  constructor(props) {
    super(props);
    this.state = { completed: this.props.completed, value: this.props.value };
  }

  handleDelete = () => {
      this.props.deleteTask(this.props.task.id);
  }

  handleCheckBox = (e) => {
    //   console.log(e.target.checked);
    this.setState({completed: e.target.checked})
  }

  handleValue = (e) => {
    this.setState({ value: e.target.value });
  }

  handleUpdate = () => {
      this.props.updateTask(
        this.props.task.id,
        this.state.value,
        this.state.completed,
        this.props.task.createAt
      );
  }

  render() {
    return (
      <li className="todo stack-small">
        <div className="c-cb" style={{ paddingTop: "7px" }}>
          {/* {console.log(this.props)} */}
          <input
            id="todo-0"
            type="checkbox"
            defaultChecked={this.props.completed}
            onChange={this.handleCheckBox}
          />
          <label></label>
          <input
            style={{width:"80%"}}
            type="text"
            name="text"
            className="todo-label"
            htmlFor="todo-0"
            value={this.state.value}
            onChange={this.handleValue}
          />
        </div>
        <div className="btn-group">
          <button onClick={this.handleUpdate} type="button" className="btn">
            update <span className="visually-hidden">{this.props.value}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={this.handleDelete}
          >
            Delete <span className="visually-hidden">{this.props.value}</span>
          </button>
        </div>
      </li>
    );
  }
}

TodoTask.propTypes = {
  value: PropTypes.string,
  completed: PropTypes.bool,
};

function mapState(state) {
  //   console.log("state", state.todoReducer);
  const { items } = state.todoReducer;
  //   console.log("items",items);
  return { items };
}

const actionCreators = {
  deleteTask: todoAction.deleteTask,
  updateTask: todoAction.updateTask
};

const connectedTodos = connect(mapState, actionCreators)(TodoTask);
export { connectedTodos as TodoTask };
