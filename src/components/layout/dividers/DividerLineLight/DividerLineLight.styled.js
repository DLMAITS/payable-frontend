import styled from "styled-components";
import { colors } from "../../../../utils/styles/helper";

const { blueTintedWhite } = colors;

const StyledDividerLineLight = styled.div`
  height: 1px;
  background: ${blueTintedWhite};
  margin-left: 10%;
  margin-right: 10%;
  align-content: center;
`;

export default StyledDividerLineLight;
