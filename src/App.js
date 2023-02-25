import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import BeachDetails from "./containers/BeachDetails";
import Beaches from "./containers/Beaches";

export default function App() {
  return (
    <Router>
        <AppNavigator></AppNavigator>
        <Route exact path="/" component={Beaches}></Route>
        <Route exact path="/beach/:id" component={BeachDetails}></Route>
    </Router>
  )
}