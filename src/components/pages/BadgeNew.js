import React from "react";
import Navbar from "../Navbar";
import logo from "../images/logo.svg";
import "../styles/BadgeNew.css";
import Badge from "../Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Turiano De Jesús"
                lastName="Romero Guzmán"
                avatarUrl="https://s.gravatar.com/avatar/d504fcbfc3b0940c812fd0e7e94e90ee?s=80"
                jobTitle="Developer Frontend"
                twitter="Rome2196"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
