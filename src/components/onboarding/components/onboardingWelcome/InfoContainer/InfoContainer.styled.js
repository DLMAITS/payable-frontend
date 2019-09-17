import styled from "styled-components";
import { StyledBaseText } from "../../../../layout/text/BaseText/BaseText.styled";
import { colors } from "../../../../../utils/styles/helper";
import { Check } from "styled-icons/boxicons-regular/Check";

const { shadowTintedWhite } = colors;

const StyledMainTitle = styled(StyledBaseText)`
  && {
    line-height: 40px;
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
    color: ${shadowTintedWhite};
    width: 90%;
  }
`;

const StyledSubTitle = styled(StyledBaseText)`
  && {
    line-height: 25px;
    height: 50px;
    text-align: left;
    font-size: 18px;
    padding-top: 10px;
    width: 65%;
    color: ${shadowTintedWhite};
  }
`;

const StyledCheck = styled(Check)`
  && {
    color: ${shadowTintedWhite};
    float: left;
    margin-left: 20px;
  }
`;

export { StyledMainTitle, StyledCheck, StyledSubTitle };
