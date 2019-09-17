import styled from "styled-components";
import { colors, fonts } from "../../../../../utils/styles/helper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  number: {
    [theme.breakpoints.down("sm")]: {
      lineHeight: "100px"
    }
  }
}));

const { fontFamily } = fonts;
const { darkBlue, lightBlue } = colors;

const StyledOnboardingProgressItemElement = styled.div`
  line-height: 30px;
  text-align: center;
  font-family: ${fontFamily};
  font-size: 18px;
  font-style: normal;
  padding-top: 10px;
  color: ${props => (props.isSelected ? darkBlue : lightBlue)};
`;

export { StyledOnboardingProgressItemElement, useStyles };
