import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { colors } from "../../../../../utils/styles/helper";

const { darkBlue } = colors;

const DarkBlueGridItem = styled(Grid)`
  background: ${darkBlue};
`;

const stylingConfig = {
  box: {
    mt: 2,
    mb: 2,
    boxShadow: 10,
    m: "auto"
  },
  gridItem: {
    item: true,
    xs: 12,
    sm: 12,
    md: 6
  },
  darkBlueGridItem: {
    item: true,
    md: 6
  },
  hidden: {
    smDown: true
  }
};

export { DarkBlueGridItem, stylingConfig };
