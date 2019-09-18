import { withStyles } from "@material-ui/core";
import { colors } from "../../../../utils/styles/helper";
import Switch from "@material-ui/core/Switch";

const { lightBlue } = colors;

const LightBlueSwitch = withStyles({
  switchBase: {
    color: lightBlue,
    "&$checked": {
      color: lightBlue
    },
    "&$checked + $track": {
      backgroundColor: lightBlue
    }
  },
  checked: {},
  track: {}
})(Switch);

export default LightBlueSwitch;
