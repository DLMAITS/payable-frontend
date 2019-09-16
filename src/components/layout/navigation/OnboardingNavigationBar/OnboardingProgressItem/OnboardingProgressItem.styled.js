import styled from "styled-components";
import { colors, fonts } from "../../../../../utils/styles/helper";

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

export { StyledOnboardingProgressItemElement };
