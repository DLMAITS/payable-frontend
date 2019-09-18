import styled from "styled-components";
import { Button } from "@material-ui/core";

const BaseButton = styled(Button)`
  && {
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    width: ${props => props.width};
    margin-top: ${props => props.mt};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-bottom: ${props => props.mb};
    padding-top: ${props => props.pt};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    padding-bottom: ${props => props.pb};
    :hover {
      background-color: ${props => props.hoverBackgroundColor};
    }
  }
`;

export default BaseButton;
