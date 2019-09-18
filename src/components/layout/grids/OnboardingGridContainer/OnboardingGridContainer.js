import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const StyledGrid = styled(Grid)`
  height: 700px;
`;

const gridContainer = {
  container: true,
  align: "center",
  justify: "center"
};

const OnboardingGridContainer = ({ children }) => {
  return <StyledGrid {...gridContainer}>{children}</StyledGrid>;
};

export default OnboardingGridContainer;
