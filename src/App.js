import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router1, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router1>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router1>
  );
}

export default App;
