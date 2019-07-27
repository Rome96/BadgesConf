import React from "react";
import confLogo from "../images/logo.svg";
import "../styles/Home.css";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="Home__hero">
        <figure>
          <img src={confLogo} alt="Logo Platzi Conf" />
        </figure>

        <h1 className="Home__Title">
          Badge <br /> Management <br /> System
        </h1>

        <Link to="/badges" className="btn btn-primary">
          Start
        </Link>
      </div>

      <div className="Home__Icon-container">
        <figure>
          <img
            src={confLogo}
            alt="Logo Platzi Badges"
            className="Home__Icon-image"
          />
        </figure>
      </div>
    </div>
  );
}
export default Home;
