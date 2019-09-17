import React from "react";
import { StyledMainTitle } from "./InfoContainer.styled";
import InfoContainerCheckSubTitle from "./InfoContainerCheckSubTitle/InfoContainerCheckSubTitle";

const InfoContainer = () => {
  return (
    <div>
      <StyledMainTitle>
        Everything you need to manage your payables financing
      </StyledMainTitle>
      <div style={{ paddingTop: "30px" }}></div>
      <InfoContainerCheckSubTitle>
        Automated revolving credit facility, when you need it, for how you want
        to use it
      </InfoContainerCheckSubTitle>
      <InfoContainerCheckSubTitle>
        All UK registered businesses (Ltd, plc, partnerships) eligible
      </InfoContainerCheckSubTitle>
      <InfoContainerCheckSubTitle>
        Credit facility from as low as £20k
      </InfoContainerCheckSubTitle>
    </div>
  );
};

export default InfoContainer;
