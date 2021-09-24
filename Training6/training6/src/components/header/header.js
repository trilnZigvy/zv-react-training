import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


import './header.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  logOut = () => {
    this.props.logout()
  }
  render() {
    // const toggle = () => setOpen(!dropdownOpen);
    return (
      <Container className="header">
        <Row>
          <Col>Zigvy Logo</Col>
          <Col style={{ textAlign: "right" }}>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>User</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>{this.props.user ? this.props.user.fullName: 'user'}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.logOut}>Log out</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        <hr></hr>
      </Container>
    );
  }
}

export default Header;
