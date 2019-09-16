import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SideBarMenuList from "./SideBarMenuList/SideBarMenuList";
import SideBarMenuItem from "./SideBarMenuItem/SideBarMenuItem";
import SideBarBottomElement from "./SideBarBottomElement/SideBarBottomElement";
import {
  DASHBOARD,
  INVOICES,
  EXCHANGE,
  USER
} from "../../../../constants/Constants";
import {
  DASHBOARDHOMEROUTE,
  INVOICESROUTE,
  EXCHANGEROUTE,
  USERROUTE
} from "../../../../constants/Constants";
import { StyledSideBar } from "./SideBar.styled";

const SideBar = ({ history }) => {
  // eslint-disable-next-line
  const [optionSelected, setOptionSelected] = useState({
    selectedIcon: null
  });

  const path = history.location.pathname;
  const parentRootOfPath = "/" + path.split("/")[1];

  return (
    <StyledSideBar>
      <SideBarMenuList>
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={DASHBOARDHOMEROUTE}
          selectedIcon={DASHBOARD}
          iconIsSelected={setOptionSelected}
          configureIcon={DASHBOARD}
        />
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={INVOICESROUTE}
          selectedIcon={INVOICES}
          iconIsSelected={setOptionSelected}
          configureIcon={INVOICES}
        />
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={EXCHANGEROUTE}
          selectedIcon={EXCHANGE}
          iconIsSelected={setOptionSelected}
          configureIcon={EXCHANGE}
        />
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={USERROUTE}
          selectedIcon={USER}
          iconIsSelected={setOptionSelected}
          configureIcon={USER}
        />
      </SideBarMenuList>
      <SideBarBottomElement />
    </StyledSideBar>
  );
};

export default withRouter(SideBar);
