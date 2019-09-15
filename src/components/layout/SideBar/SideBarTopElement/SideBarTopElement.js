import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    fill: "white"
  },
  logo: {
    display: "block",
    margin: "auto",
    color: "white",
    "&:hover": {
      fill: "white"
    }
  }
}));

const SideBarTopElement = () => {
  const classes = useStyles();
  return (
    <div>
      <Link to="/">
        <div className={classes.container}>
          <i className={"fas fa-eye fa-lg " + classes.logo}></i>
        </div>
      </Link>
    </div>
  );
};

export default SideBarTopElement;
