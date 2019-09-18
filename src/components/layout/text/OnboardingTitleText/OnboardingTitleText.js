import styled from "styled-components";
import { StyledBaseText } from "../BaseText/BaseText.styled";
import { colors } from "../../../../utils/styles/helper";

const { darkBlue } = colors;

const OnboardingTitleText = styled(StyledBaseText)`
  && {
    line-height: 30px;
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
    color: ${darkBlue};
  }
`;

export default OnboardingTitleText;
