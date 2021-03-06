import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


import axios from "axios";
// import icon from '../images/signup.png'
import { Link } from "react-router-dom";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";


// class Signup extends Component {
//   state = {
//     email: "",
//     password: "",
//     password_confirmation: "",
//     success: ""
//   };
//   handleClick = () => {
//     // debugger;
//       let url = "http://localhost:3333/users.json";
//
//       let postData = {
//         email: this.state.email,
//         password: this.state.password,
//         password_confirmation: this.state.password_confirmation
//       };
//
//       let axiosConfig = {
//         headers: {
//           "Content-Type": "application/json;charset=UTF-8",
//           "Access-Control-Allow-Origin": "*"
//         }
//       };
//
//       axios
//         .post(url, postData, axiosConfig)
//         .then(() => {
//           // debugger;
//           this.setState({ success: "Success your account was created!" });
//           axios({
//             url: "http://localhost:3333/user_token",
//             method: "post",
//             data: {
//               auth: {
//                 email: this.state.email,
//                 password: this.state.password
//               }
//             }
//           }).then(async (res) => {
//             // debugger;
//             await localStorage.setItem("jwtToken", res.jwt);
//             this.props.history.push("/");
//           });
//         })
//         .catch(err => {
//           // debugger;
//           if(err.message.includes("422")) {
//             alert("Password not matched!")
//           };
//         });
//     };
//
//     render() {
//       return (
//         <div>
//
//           <div>
//             <h2 style={{marginTop: '3em' }}>Sign Up</h2>
//             <TextField
//               hintText="Enter your Email"
//               floatingLabelText="Email"
//               onChange={(event, newValue) => this.setState({ email: newValue })}
//             />
//             <br />
//             <TextField
//               type="password"
//               hintText="Enter your Password"
//               floatingLabelText="Password"
//               onChange={(event, newValue) =>
//                 this.setState({ password: newValue })
//               }
//             />
//             <br />
//             <TextField
//               type="password"
//               hintText="Password confirmation"
//               floatingLabelText="Password Confirmation"
//               onChange={(event, newValue) =>
//                 this.setState({ password_confirmation: newValue })
//               }
//             />
//             <br />
//             <RaisedButton
//               label="Submit"
//               primary={true}
//               style={style}
//               disabled={this.state.email !== "" && this.state.password !== ""&& this.state.password_confirmation !== "" ? false : true}
//               onClick={this.handleClick}
//             />
//           </div>
//
//           <p>{this.state.success}</p>
//
//           <Link to = "/Login" className ="headerLink">[Already a member? Sign In]</Link>
//           <Footer />
//         </div>
//       );
//     }
//   }
//   const style = {
//     margin: 15
// };
//
// export default Signup;
class Signup extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    success: ""
  };

  handleClick = () => {
    let url = "https://codersappserver.herokuapp.com/users.json";
// debugger;
    let postData = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .post(url, postData, axiosConfig)
      .then(() => {
        this.setState({ success: "Success your account was created!" });
        axios({
          url: "https://codersappserver.herokuapp.com/user_token",
          method: "post",
          data: {
            auth: {
              email: this.state.email,
              password: this.state.password
            }
          }
        }).then( (res) => {

           localStorage.setItem("jwtToken", res.jwt);
          this.props.history.push("/editprofile");
        });
      })
      .catch(err => {
        if(err.message.includes("422")) {
          alert("Password not matched!")
        };
      });
  };

  render() {
    return (
      <div>
        <div>
          <h2 style={{marginTop: '3em' }}>Sign Up</h2>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Password confirmation"
            floatingLabelText="Password Confirmation"
            onChange={(event, newValue) =>
              this.setState({ password_confirmation: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            disabled={this.state.email !== "" && this.state.password !== ""&& this.state.password_confirmation !== "" ? false : true}
            onClick={this.handleClick}
          />
        </div>




        <Footer />
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default Signup;
