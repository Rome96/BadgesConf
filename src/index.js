import React from "react";
import ReactDOM from "react-dom";

import Badge from './components/Badge'

// const name = "Turiano De Jesús";

// const jsx = (
//   <div>
//     <h1>Hola me llamo {name}</h1>
//     <p>Soy Developer Frontend</p>
//   </div>
// );

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge/>, container);
