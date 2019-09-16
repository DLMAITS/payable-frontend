import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    lineHeight: "30px",
    textAlign: "center",
    fontFamily: '"Lucida Bright", Georgia, serif',
    fontSize: "18px",
    fontStyle: "normal",
    paddingTop: "10px",
    color: props => (props.isSelected ? "#25274d" : "#a8d0e6")
  }
}));

const OnboardingProgressItem = props => {
  const { itemNumber, itemText } = props;
  const classes = useStyles(props);
  return (
    <div>
      <div className={classes.root}>{itemNumber}</div>
      <div className={classes.root}>{itemText}</div>
    </div>
  );
};

export default OnboardingProgressItem;
