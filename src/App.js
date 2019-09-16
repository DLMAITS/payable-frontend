import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/layout/containers/AppContainer/AppContainer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route component={AppContainer} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
