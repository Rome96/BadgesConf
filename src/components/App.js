import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Badges from "./pages/Badges";
import BadgeNew from "./pages/BadgeNew";

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
