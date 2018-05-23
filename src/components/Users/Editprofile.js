import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ImageUpload from "./ImageUpload";
import ResumeUpload from "./ResumeUpload";
import jwtDecoder from "jwt-decode";
import TextField from "material-ui/TextField";
import axios from "axios";
import './Editprofile.css';
import RaisedButton from "material-ui/RaisedButton";

// uplod images

const style = {
  margin: 15
};

// upload images ends
class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      name :"",
      email:"",
      password:"",
      password_confirmation:"",
      description:"",
      keyskills:"",
      location:"",
      resumeu:"",
      githubu:"",
      linkedinu:"",
      insta:"",
      twitteru:"",
      success: ""
    };
    this._handleSubmit =this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  componentDidMount = async () => {
      console.log(this.props)
    await this.fetchUser();
    };
  _handleSubmit(event) {
    event.preventDefault();
      // debugger;
        var user = jwtDecoder(this.props.token);
        console.log(user);
        user = jwtDecoder(localStorage.getItem('jwtToken'));
        console.log(user);
        let url = `https://codersappserver.herokuapp.com/users/${user.sub}.json`;
        console.log("This url with user .sub is ",url);
          // debugger;
        axios({
          url: url,
          method: "patch",
          headers: {
            authorization: `Bearer ${this.props.token}`
          },
          data: {

            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            name: this.state.name,
            description:this.state.description,
            keyskills:this.state.keyskills,
            location:this.state.location,
            resumeu:this.state.resumeu,
            githubu:this.state.githubu,
            linkedinu:this.state.linkedinu,
            insta:this.state.insta,
            twitteru:this.state.twitteru
          }
        }).then(res =>
          this.setState({ user: res.data })
        );
  };
  _handleChange(event) {

    if (event.target.id === "name-field") {
      this.setState({
        name: event.target.value
      });
    }
    if (event.target.id === "description-field") {
      this.setState({
        description: event.target.value
      });
    }
    if (event.target.id === "keyskills-field") {
      this.setState({
        keyskills: event.target.value
      });
    }
    if (event.target.id === "location-field") {
      this.setState({
        location: event.target.value
      });
    }
    if (event.target.id === "resumeu-field") {
      this.setState({
        resumeu: event.target.value
      });
    }

    if (event.target.id === "githubu-field") {
      this.setState({
        githubu: event.target.value
      });
    }
    if (event.target.id === "linkedinu-field") {
      this.setState({
        linkedinu: event.target.value
      });
    }
    if (event.target.id === "insta-field") {
      this.setState({
        insta: event.target.value
      });
    }
    if (event.target.id === "twitteru-field") {
      this.setState({
        twitteru: event.target.value
      });
    }

    if (event.target.id === "password-field") {
      this.setState({
        password: event.target.value
      });
    }
    if (event.target.id === "password-confirmation-field") {
      this.setState({
        password_confirmation: event.target.value
      });
    }
  }




    fetchUser = () => {
      // debugger;
      var user = jwtDecoder(this.props.token);
      console.log("user inn Edit profile",user);
       user = jwtDecoder(localStorage.getItem('jwtToken'));
      console.log("user inn Edit profile",user);

      axios({
        url: `https://codersappserver.herokuapp.com/users/${user.sub}.json`,
        method: "get",
        headers: {
          authorization: `Bearer ${this.props.token}`
        }
      }).then(res => this.setState({
        user: res.data,
        name :res.data.name,
        email:res.data.email,
        description:res.data.description,
        keyskills:res.data.keyskills,
        location:res.data.location,
        resumeu:res.data.resumeu,
        githubu:res.data.githubu,
        linkedinu:res.data.linkedinu,
        insta:res.data.insta,
        twitteru:res.data.twitteru
        }));
    };

  render() {
    // debugger;
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="Editprofilemain">
      <div className="EditprofileBanner"><p>EDIT PROFILE</p></div>
      <div className="Editprofile">
        <div className="EditprofileDiv">
        <form onSubmit={this._handleSubmit}>
          <div>

            </div>
          <TextField
            id="name-field"
            hintText="Name"
            floatingLabelText="Name"
            defaultValue={this.state.name}
            onChange={this._handleChange}
          />
            <br />
          <TextField
            id="password-field"
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="password-confirmation-field"
            type="password"
            hintText="Password confirmation"
            floatingLabelText="Password Confirmation"
            onChange={this._handleChange}
          />

          <br />
          <ImageUpload user={this.state.user}/>
          <br />


          <br />
          <TextField
            id="description-field"
            type="description"
            hintText="Fun facts about yourself"
            floatingLabelText="About"
            multiLine={true}
            rows={2}
            rowsMax={4}
            defaultValue={this.state.user.description}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="keyskills-field"
            type="keyskills"
            hintText="React,Rails"
            floatingLabelText="keyskills"
            defaultValue={this.state.user.keyskills}
            onChange={this._handleChange}
          />


          <br />
          <ResumeUpload user={this.state.user}/>
          <br />

          <br />
          <TextField
            id="githubu-field"
            type="githubu"
            hintText="https://github.com/..."
            floatingLabelText="GitHub Link"
            defaultValue={this.state.user.githubu}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="linkedinu-field"
            type="linkedinu"
            hintText="https://www.linkedin.com/..."
            floatingLabelText="Linkedin Link"
            defaultValue={this.state.user.linkedinu}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="insta-field"
            type="insta"
            hintText="https://www.instagram.com/..."
            floatingLabelText="Instagram Link"
            defaultValue={this.state.user.insta}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="twitteru-field"
            type="twitteru"
            hintText="https://www.twitter.com/..."
            floatingLabelText="Twitter Link"
            defaultValue={this.state.user.twitteru}
            onChange={this._handleChange}
          />
          <br />
          <TextField
            id="location-field"
            type="location"
            hintText="Sydney"
            floatingLabelText="Location"
            defaultValue={this.state.user.location}
            onChange={this._handleChange}
          />
          <br /><br />
          <RaisedButton
            label="Submit"
            type="submit"
            primary={true}
            style={style}
          />
        </form>
        </div>
        <br />
        <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Editprofile;
