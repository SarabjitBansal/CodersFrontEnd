import React, { Component } from "react";
import axios from "axios";
import jwtDecoder from "jwt-decode";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import RaisedButton from "material-ui/RaisedButton";
import './Allprofile.css';

class Profile extends Component {
  // debugger;
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      height:50,
      width:50
    };
  }

  componentDidMount = async () => {
    await this.fetchUser();
  };

  fetchUser = () => {
    // Fat arrow functions do not break the connection to this

    // let user = jwtDecoder(this.props.token);
    // console.log(user);
    // debugger;
     const user = jwtDecoder(localStorage.getItem('jwtToken'));
    // console.log(user);
    axios({
      url: `https://codersappserver.herokuapp.com/users/${user.sub}.json`,
      method: "get",
      headers: {
        authorization: `Bearer {this.props.token}`
      }
    })
      .then(res => this.setState({ user: res.data }))

  };

  render() {
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="myProfile" key={this.state.user.id}>
      <div className ="myProfile2">
      <div className="myProfile1">
        <img src={ this.state.user.image } alt={ this.state.user.name } height={ this.state.height }  width={ this.state.width }/>
        <p>{this.state.user.name}</p>
        <p><strong>About: </strong> {this.state.user.description}</p>
        <p><strong>Keyskills: </strong>{this.state.user.keyskills}</p>
        <p><strong>Location: </strong>{this.state.user.location}</p>
        <Link to="/editprofile">
        <RaisedButton primary={true}>Edit Profile</RaisedButton>
        </Link>
        <br />
        <br />
      </div>
        <br />
        <br />




      <div className="secondDiv">
      <div className="mysocialMedia">

        {(this.state.ulinkedinu) ?
          <div><a  href={ `${this.state.ulinkedinu}` }  target="_blank" className="fa fa-linkedin"></a></div>
        :

        <div><a  href='#'  target="_blank" className="fa fa-linkedin disabled-link"></a></div>

       }
        {(this.state.utwitteru) ?
          <div><a  href={ `${this.state.utwitteru}` }  target="_blank" className="fa fa fa-twitter"></a></div>
        :

        <div><a  href='#'  target="_blank" className="fa fa fa-twitter disabled-link"></a></div>

       }
        {(this.state.uinstau) ?
          <div><a  href={ `${this.state.uinstau}` }  target="_blank" className="fa fa fa-instagram"></a></div>
        :

        <div><a  href='#'  target="_blank" className="fa fa fa-instagram disabled-link"></a></div>

       }
        {(this.state.ugithubu) ?
          <div><a  href={ `${this.state.ugithubu}` }  target="_blank" className="fa fa fa-github"></a></div>
        :

        <div><a  href='#'  target="_blank" className="fa fa fa-github disabled-link"></a></div>

        }
      </div>
      <br />
      <br />


      </div>
      <br />


      <br/><br/>
      </div>
       <Footer />
      </div>
    );
  }
}

export default Profile;
