import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./components/AppNavigator";
import BeachDetails from "./containers/BeachDetails";
import Beaches from "./containers/Beaches";
import Favourites from "./containers/Favourites";
import { persistor, store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator></AppNavigator>
          <Route exact path="/" component={Beaches}></Route>
          <Route exact path="/beach/:id" component={BeachDetails}></Route>
          <Route exact path="/favourites" component={Favourites}></Route>
        </Router>
      </PersistGate>
    </Provider>
  )
}