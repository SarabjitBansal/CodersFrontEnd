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
            <p>
            Fed up of putting everything into a job application, getting your hopes up and never hearing anything back?
            Or are you an employer with mountains of CVs and portfolios to get through on top of the rest of your workload?
            Pick Me is a concept for an app which simplifies the application process in the creative industry, for both the applicant and the employer.
            </p>
            <p>
            Fed up of putting everything into a job application, getting your hopes up and never hearing anything back?
            Or are you an employer with mountains of CVs and portfolios to get through on top of the rest of your workload?
            Pick Me is a concept for an app which simplifies the application process in the creative industry, for both the applicant and the employer.
            </p>
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
