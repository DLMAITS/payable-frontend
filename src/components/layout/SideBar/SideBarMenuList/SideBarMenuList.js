import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    listStyle: "none",
    padding: "10px 0px",
    margin: "0",
    textAlign: "center",
    lineHeight: "5rem"
  }
}));

const SideBarMenuList = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <ul className={classes.root}>{children}</ul>
    </div>
  );
};

export default SideBarMenuList;
