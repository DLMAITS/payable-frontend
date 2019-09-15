import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "1px",
    background: "#aaabb8",
    marginLeft: "10%",
    marginRight: "10%",
    alignContent: "center"
  }
}));

const DividerLineLight = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default DividerLineLight;
