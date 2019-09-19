import styled from "styled-components";
import { colors } from "../../../../utils/styles/helper";
import BaseButton from "../BaseButton/BaseButton";

const { green, darkGreen } = colors;

const StyledButton = styled(BaseButton)`
  && {
    color: white;
    background-color: ${green};
    width: ${props => props.width};
    margin-top: ${props => props.mt};
    :hover {
      background-color: ${darkGreen};
    }
  }
`;

export default StyledButton;
