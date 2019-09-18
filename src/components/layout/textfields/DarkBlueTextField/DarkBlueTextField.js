import { TextField, withStyles } from "@material-ui/core";
import { colors } from "../../../../utils/styles/helper";
import styled from "styled-components";

const { darkBlue } = colors;

const DarkBlueTextFieldBase = withStyles({
  root: {
    "& label.Mui-focused": {
      color: darkBlue
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: darkBlue
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: darkBlue
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: darkBlue
    }
  }
})(TextField);

const DarkBlueTextField = styled(DarkBlueTextFieldBase)`
  width: ${props => props.width};
`;

export default DarkBlueTextField;
