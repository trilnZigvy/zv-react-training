import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { todoAction } from "../../../redux-saga/todo/action";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
import DialogContentText from "@mui/material/DialogContentText";
import { connect } from "react-redux";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task.value,
      status: this.props.task.status,
      open: false,
    };
  }
  componentDidMount(){
    // console.log("thats",this.props.task);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("this", nextProps.task.status);
    if (nextProps.task.status !== prevState.status) {
      return { status: nextProps.task.status };
    } else return null;
  }
  handleUpdate = () => {
    this.props.updateTask({
      value: this.state.value,
      status: this.state.status,
      id: this.props.task.id,
    });
    this.setState({ open: false });
  };

  handleReady = () => {
    this.props.readyTask({
      value: this.state.value,
      status: "ready",
      id: this.props.task.id,
    });
    this.setState({ status: "ready", open: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    // console.log(this.props.task);
    return (
      <li style={{ marginTop: "10pxs" }}>
        <Dialog
          onClose={this.setStatehandleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title">Update Task</DialogTitle>

          <DialogContent dividers>
            <DialogContentText style={{ width: "500px" }}></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={this.state.value}
              onChange={this.handleChange}
              type="task"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleReady}>
              Ready
            </Button>
            <Button autoFocus onClick={this.handleUpdate}>
              Save changes
            </Button>
            <Button autoFocus onClick={this.handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Row style={{ marginTop: "10px", lineHeight: 2 }}>
          <Col xs={8} style={{ textAlign: "left" }}>
            {this.state.value}
          </Col>

          {this.props.task.status === "draft" && (
            <Col xs={2} style={{ textAlign: "right" }}>
              <Button onClick={this.handleClickOpen}>edit</Button>
            </Col>
          )}

          {this.props.task.status === "ERROR" && (
            <Col xs={2} style={{ textAlign: "right" }}>
              <Button onClick={this.handleReady}>Ready</Button>
            </Col>
          )}
          {(this.props.task.status === "ready" ||
            this.props.task.status === "SUCCESS" ||
            this.props.task.status === "Submitting") && (
            <Col xs={2} style={{ textAlign: "right" }}></Col>
          )}

          <Col xs={2} style={{ textAlign: "right" }}>
            {this.props.task.status}
          </Col>
        </Row>
        <hr />
      </li>
    );
  }
}

function mapState(state) {
  return {};
}

const actionCreators = {
  updateTask: todoAction.draftTask,
  readyTask: todoAction.readyTask,
};

const connectTask = connect(mapState, actionCreators)(Task);

export { connectTask as Task };
