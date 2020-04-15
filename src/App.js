import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
