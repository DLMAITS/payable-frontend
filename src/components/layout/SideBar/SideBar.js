import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import DividerLineLight from "../utils/DividerLineLight";
import SideBarTopElement from "./SideBarTopElement/SideBarTopElement";
import SideBarMenuList from "./SideBarMenuList/SideBarMenuList";
import SideBarMenuItem from "./SideBarMenuItem/SideBarMenuItem";
import SideBarBottomElement from "./SideBarBottomElement/SideBarBottomElement";
import {
  DASHBOARD,
  INVOICES,
  EXCHANGE,
  USER
} from "../../../constants/Constants";
import {
  DASHBOARDHOMEROUTE,
  INVOICESROUTE,
  EXCHANGEROUTE,
  USERROUTE
} from "../../../constants/Constants";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#25274d",
    width: "100%",
    height: "100%"
  }
}));

const SideBar = ({ history }) => {
  const classes = useStyles();

  // eslint-disable-next-line
  const [optionSelected, setOptionSelected] = useState({
    selectedIcon: null
  });

  const path = history.location.pathname;
  const parentRootOfPath = "/" + path.split("/")[1];

  const configureIcon = designatedIcon => {
    switch (designatedIcon) {
      case DASHBOARD:
        return "fa-home";
      case INVOICES:
        return "fa-file";
      case EXCHANGE:
        return "fa-exchange-alt";
      case USER:
        return "fa-user";
      default:
        console.log(designatedIcon);
        return "fa-user";
    }
  };

  return (
    <div className={classes.root}>
      <SideBarTopElement />
      <DividerLineLight />
      <SideBarMenuList>
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={DASHBOARDHOMEROUTE}
          selectedIcon={DASHBOARD}
          iconIsSelected={setOptionSelected}
          configureIcon={configureIcon(DASHBOARD)}
        />
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={INVOICESROUTE}
          selectedIcon={INVOICES}
          iconIsSelected={setOptionSelected}
          configureIcon={configureIcon(INVOICES)}
        />
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={EXCHANGEROUTE}
          selectedIcon={EXCHANGE}
          iconIsSelected={setOptionSelected}
          configureIcon={configureIcon(EXCHANGE)}
        />
        <SideBarMenuItem
          currentParentRootOfPath={parentRootOfPath}
          designatedRoute={USERROUTE}
          selectedIcon={USER}
          iconIsSelected={setOptionSelected}
          configureIcon={configureIcon(USER)}
        />
      </SideBarMenuList>
      <SideBarBottomElement />
    </div>
  );
};

export default withRouter(SideBar);
