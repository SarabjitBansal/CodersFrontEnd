import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Header1 from "../Header/Header";
import Footer from "../Footer/Footer";
import './Homepage.css';
class Home extends Component {
  render() {
    return (

      <div className="About">
        <div id ="banner">
          <div id = "boxContent">
            <p>Welcome to the hub of geeks and nerds.<br /><br/> This is the perfect place to find a coding partner for your next project.</p>

          </div>
        </div>
        <div id ="mainDiv">
          <div id ="mainDiv1">
            <div id="div1">
              <a className="fa fa-map-marker icon1"></a>
              <p>Find coders in your area</p>
            </div>
            <div id="div2">
              <a className="fa fa-users icon1"></a>
              <p>Collaborate on your projects</p>
            </div>
            <div id="div3">
              <a className="fa fa-star icon1"></a>
              <p>Find the best fit</p>
            </div>
          </div>
        </div>
        <div id="secmainDiv">
          <div id="secmainDiv1">
            <div id="div4">



            <h3>DESIGN - BUILD - PROBLEM SOLVE </h3>
            <p>- Our app developers will walk you through the steps to bring your product to life. We will ensure your project has a roadmap that is clear, actionable, and within your budget. We will advise you on the best language and technology stack for your product depending on your requirements. </p>

            <p>- Is your project not going as planned? Do you need to work faster, improve quality, or find a better process? We bring years’ worth of experience from building hundreds of projects to your doorstep. we’ll take your product to the next level.</p>

            </div>
            <div id="div5"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
