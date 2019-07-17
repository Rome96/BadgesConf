import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/badge/Badge";

// const name = "Turiano De Jesús";

// const jsx = (
//   <div>
//     <h1>Hola me llamo {name}</h1>
//     <p>Soy Developer Frontend</p>
//   </div>
// );

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    firstName="Turiano De Jesús"
    lastName="Romero Guzmán"
    avatarUrl='https://s.gravatar.com/avatar/d504fcbfc3b0940c812fd0e7e94e90ee?s=80'
    jobTitle="Developer Frontend"
    twitter="Rome2196"
  />,
  container
);
