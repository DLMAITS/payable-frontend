import React from "react";
import { StyledSideBarMenuList } from "./SideBarMenuList.styled";

const SideBarMenuList = ({ children }) => {
  return (
    <div>
      <StyledSideBarMenuList>{children}</StyledSideBarMenuList>
    </div>
  );
};

export default SideBarMenuList;
