import React, { Component } from "react";
import { connect } from "react-redux";
// import { userAction } from "../../redux/actions/user.action";
import { getAction } from "../../redux-saga/getData/actions";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {id : this.props.match.params.id};
  }

  componentDidMount() {
    
    this.props.getById(this.props.match.params.id);
    this.setState({ userById: this.props.userById });
    // console.log(this.props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("prevState: ",prevState);
    // this.props.getById(nextProps.match.params.id);
    if (
      nextProps.match.params.id &&
      prevState.id !== nextProps.match.params.id
    ) {
      prevState.id = nextProps.match.params.id;
      nextProps.getById(nextProps.match.params.id);
    }
    // if (nextProps.match.params.id !== this.props.match.params.id) {
    //   this.props.getById(this.props.match.params.id);
    // } else return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.userById === "NOT_FOUND") {
      // console.log("NOTFOUND");
      alert("User NOT FOUND")
      this.props.history.push("/app/users");
    }
    // console.log("userByID:", this.props);
    if (prevProps.userById !== this.props.userById) {
      this.setState({ userById: this.props.userById });
    }
  }

  render() {
    return (
      <div>
        {this.props.userById && (
          <div>
            <p>fullName: {this.props.userById.fullName}</p>
            <p>Email: {this.props.userById.email}</p>
            <p>password: {this.props.userById.password}</p>
            <p>id: {this.props.userById.id}</p>
            <p>role: {this.props.userById.role}</p>
          </div>
        )}
      </div>
      // <div>
      //   <p>fullName: {this.state.userById.fullName}</p>
      //   <p>Email: {this.state.userById.email}</p>
      //   <p>password: {this.state.userById.password}</p>
      //   <p>id: {this.state.userById.id}</p>
      //   <p>role: {this.state.userById.role}</p>
      //   {/* {console.log(props)} */}
      // </div>
    );
  }
}

function mapSate(state) {
  const { userById } = state.userReducer;
  return { userById };
}

const actionCreators = {
  getById: getAction.requestGetById,
};

const connectMyInfo = connect(mapSate, actionCreators)(UserProfile);
export { connectMyInfo as UserProfile };

// export default UserProfile;

// import React from "react";
// import { useParams } from "react-router";
// import { userAction } from "../../redux/actions/user.action";
// import { useDispatch } from "react-redux";

// function UserProfile(props) {
//   let { id } = useParams();
//   const dispatch = useDispatch();
//   // const data = dispatch(userAction.getById(id))
//   // console.log(data);
//   return (
//     <div>
//       {props.listUsers &&
//         props.listUsers.map((user) => {
//           if (user.id === id) {
//             return (
//               <div>
//                 <p>fullName: {user.fullName}</p>
//                 <p>Email: {user.email}</p>
//                 <p>password: {user.password}</p>
//                 <p>id: {user.id}</p>
//                 <p>role: {user.role}</p>
//                 {/* {console.log(props)} */}
//               </div>
//             );
//           }
//           return <div></div>
//         })}
//     </div>
//   );
// }

// // function mapSate(state) {
// //   const { listUsers } = state.userReducer;
// //   return { listUsers };
// // }

// // const actionCreators = {
// //   getById: userAction.getById,
// // };
// // export default MyInfo
// // const connectMyInfo = connect(mapSate, actionCreators)(UserProfile);
// // export { connectMyInfo as UserProfile };

// export default UserProfile;
