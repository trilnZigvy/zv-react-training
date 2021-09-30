import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Task } from "../task/task";
import "./taskBox.css";
import { connect } from "react-redux";
import { todoAction } from "../../../redux-saga/todo/action";
import { v4 as uuidv4 } from "uuid";
class TaskBox extends Component {
  componentDidMount() {
    // if (navigator.onLine) {
    //   this.props.toOnline();
    // } else {
    //   this.props.toOffline();
    // }
    // window.addEventListener("online", () => {
    //   this.props.toOnline();
    // });
    // window.addEventListener("offline", () => {
    //   this.props.toOffline();
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    // this.state.items = this.props.items;
    // if (prevProps.task !== this.props.task) {
    //   this.setState({ items: this.props.items });
    // }

    //  this.setState({ items: this.props.items });
  }

  render() {
    return (
      <div>
        <Container style={{ width: "80%" }}>
          <div style={{ textAlign: "right" }}>
            network: {this.props.online ? "online" : "offline"}
          </div>
          <div className="border-box">
            <Row style={{ marginTop: "10px" }}>
              <Col xs={8} style={{ textAlign: "left" }}>
                Task name
              </Col>
              <Col xs={4} style={{ textAlign: "right", paddingRight: "20px" }}>
                Status
              </Col>
            </Row>
            <hr />
            <ul className="pad-side-5px">
              {this.props.task &&
                this.props.task.map((task, index) => {
                  // console.log("hello", task);
                  return <Task key={uuidv4()} task={task} />;
                })}
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

function mapSate(state) {
  const { online, task } = state.todoReducer;
  // console.log(task);
  // const user = false;
  // console.log("task",task);
  // const task=[1,2,3]
  return { online, task };
}

const actionCreators = {
  // login: userAction.login,
  toOnline: todoAction.setOnline,
  toOffline: todoAction.setOffline,
};
const connectTaskBox = connect(mapSate, actionCreators)(TaskBox);
export { connectTaskBox as TaskBox };

// export default TaskBox;
