import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { colors } from "../../../../../utils/styles/helper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    maxWidth: "1000px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "75%",
      minWidth: "450px"
    }
  }
}));

const { darkBlue } = colors;

const StyledGridContainer = styled(Grid)`
  height: 700px;
`;

const DarkBlueGridItem = styled(Grid)`
  background: ${darkBlue};
`;

export { StyledGridContainer, DarkBlueGridItem, useStyles };
