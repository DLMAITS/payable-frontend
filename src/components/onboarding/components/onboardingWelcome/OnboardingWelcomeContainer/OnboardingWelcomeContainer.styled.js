import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { colors } from "../../../../../utils/styles/helper";

const { darkBlue } = colors;

const StyledGridContainer = styled(Grid)`
  height: 650px;
`;

const DarkBlueGridItem = styled(Grid)`
  background: ${darkBlue};
`;

export { StyledGridContainer, DarkBlueGridItem };
