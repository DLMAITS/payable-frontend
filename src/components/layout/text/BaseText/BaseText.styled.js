import styled from "styled-components";
import { fonts } from "../../../../utils/styles/helper";

const { fontFamily } = fonts;

const StyledBaseText = styled.div`
  font-family: ${fontFamily};
  font-style: normal;
  word-break: break-word;
`;

export { StyledBaseText };
