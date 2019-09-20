import styled from "styled-components";
import { StyledBaseText } from "../BaseText/BaseText.styled";
import { colors } from "../../../../utils/styles/helper";

const { grey } = colors;

const OnboardingSubTitleText = styled(StyledBaseText)`
  && {
    line-height: 15px;
    text-align: center;
    font-size: 18px;
    padding-top: 20px;
    color: ${grey};
  }
`;

export default OnboardingSubTitleText;
