import React, { Fragment } from "react";
import { StyledCheck, StyledSubTitle } from "../InfoContainer.styled";

const InfoContainerCheckSubTitle = ({ children }) => {
  return (
    <Fragment>
      <div style={{ display: "block", paddingTop: "30px" }}>
        <span>
          <StyledCheck size="45px"></StyledCheck>
        </span>
        <span>
          <StyledSubTitle>{children}</StyledSubTitle>
        </span>
      </div>
    </Fragment>
  );
};

export default InfoContainerCheckSubTitle;
