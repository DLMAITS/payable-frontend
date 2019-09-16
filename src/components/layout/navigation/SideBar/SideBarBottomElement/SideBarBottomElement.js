import React from "react";
import "./SideBarBottomElement.css";
import { makeStyles } from "@material-ui/core";
import DividerLineLight from "../../../dividers/DividerLineLight/DividerLineLight";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "250px"
  },
  container: {
    width: "100%",
    height: "4rem",
    display: "flex",
    alignItems: "center"
  },
  ulContainer: {
    listStyle: "none",
    padding: "10px 0px",
    margin: "0",
    textAlign: "center",
    lineHeight: "5rem"
  }
}));

const SideBarBottomElement = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DividerLineLight />
      <ul className={classes.ulContainer}>
        <li>
          <Link to="logout">
            <i className="fas fa-sign-out-alt fa-lg"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarBottomElement;
