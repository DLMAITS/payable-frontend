import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/layout/AppContainer/AppContainer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/nogo">
            No go
          </Route>
          <Route component={AppContainer} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
