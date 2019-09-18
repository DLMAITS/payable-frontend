import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import { colors } from "../../../../utils/styles/helper";

const { darkBlue } = colors;

const DarkBlueCheckBox = withStyles({
  root: {
    color: darkBlue,
    "&$checked": {
      color: darkBlue
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default DarkBlueCheckBox;
