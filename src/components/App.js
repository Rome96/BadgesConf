import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Badges from "./pages/Badges";
import BadgeNew from "./pages/BadgeNew";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
        </switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

//para arreglar
// <Route exact path="*" component={NotFound} />
