import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import OnboardingNavigationBar from "../OnboardingNavigationBar/OnboardingNavigationBar";
import OnboardingRoutes from "../../../routing/OnboardingRoutes";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0"
  }
}));

const OnboardingContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OnboardingNavigationBar />
      <Switch>
        <Route component={OnboardingRoutes} />
      </Switch>
    </div>
  );
};

export default OnboardingContainer;
