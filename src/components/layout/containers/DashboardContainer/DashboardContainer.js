import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../../navigation/SideBar/SideBar";
import DashboardRoutes from "../../../routing/DashboardRoutes";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "5rem auto",
    gridGap: "0rem",
    padding: "0rem",
    position: "absolute",
    top: "0",
    left: "0"
  }
}));

const DashboardContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <Switch>
        <Route component={DashboardRoutes} />
      </Switch>
    </div>
  );
};

export default DashboardContainer;
