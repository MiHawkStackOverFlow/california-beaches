import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import Beaches from "./containers/Beaches";

export default function App() {
  return (
    <Router>
        <AppNavigator></AppNavigator>
        <br />
        <Route path="/" component={Beaches}></Route>
    </Router>
  )
}