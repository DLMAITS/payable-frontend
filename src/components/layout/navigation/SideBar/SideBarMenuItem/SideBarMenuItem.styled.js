import React from "react";
import { Home } from "styled-icons/boxicons-solid/Home";
import { File } from "styled-icons/fa-regular/File";
import { ExchangeAlt } from "styled-icons/fa-solid/ExchangeAlt";
import { User } from "styled-icons/boxicons-solid/User";
import styled from "styled-components";
import {
  DASHBOARD,
  INVOICES,
  EXCHANGE,
  USER
} from "../../../../../constants/Constants";
import { colors, icons } from "../../../../../utils/styles/helper";

const { blueTintedWhite, white } = colors;
const { smallWidth } = icons;

const HomeIcon = styled(Home)`
  color: ${props =>
    props.selectedIcon === props.designatedIcon ||
    props.currentParentRootOfPath === props.designatedRoute
      ? white
      : blueTintedWhite};
  :hover {
    color: ${white};
  }
  width: ${smallWidth};
`;

const InvoicesIcon = styled(File)`
  color: ${props =>
    props.selectedIcon === props.designatedIcon ||
    props.currentParentRootOfPath === props.designatedRoute
      ? white
      : blueTintedWhite};
  :hover {
    color: ${white};
  }
  width: 25%;
`;

const ExchangeIcon = styled(ExchangeAlt)`
  color: ${props =>
    props.selectedIcon === props.designatedIcon ||
    props.currentParentRootOfPath === props.designatedRoute
      ? white
      : blueTintedWhite};
  :hover {
    color: ${white};
  }
  width: 30%;
`;

const UserIcon = styled(User)`
  color: ${props =>
    props.selectedIcon === props.designatedIcon ||
    props.currentParentRootOfPath === props.designatedRoute
      ? white
      : blueTintedWhite};
  :hover {
    color: ${white};
  }
  width: 35%;
`;

const StyledSideBarMenuItem = ({
  currentParentRootOfPath,
  designatedRoute,
  designatedIcon,
  selectedIcon,
  iconIsSelected,
  configureIcon
}) => {
  switch (configureIcon) {
    case DASHBOARD:
      return (
        <HomeIcon
          currentParentRootOfPath={currentParentRootOfPath}
          designatedRoute={designatedRoute}
          designatedIcon={designatedIcon}
          selectedIcon={selectedIcon}
          iconIsSelected={iconIsSelected}
        />
      );
    case INVOICES:
      return (
        <InvoicesIcon
          currentParentRootOfPath={currentParentRootOfPath}
          designatedRoute={designatedRoute}
          designatedIcon={designatedIcon}
          selectedIcon={selectedIcon}
          iconIsSelected={iconIsSelected}
        />
      );
    case EXCHANGE:
      return (
        <ExchangeIcon
          currentParentRootOfPath={currentParentRootOfPath}
          designatedRoute={designatedRoute}
          designatedIcon={designatedIcon}
          selectedIcon={selectedIcon}
          iconIsSelected={iconIsSelected}
        />
      );
    case USER:
      return (
        <UserIcon
          currentParentRootOfPath={currentParentRootOfPath}
          designatedRoute={designatedRoute}
          designatedIcon={designatedIcon}
          selectedIcon={selectedIcon}
          iconIsSelected={iconIsSelected}
        />
      );
    default:
      return <div>Error</div>;
  }
};

export { StyledSideBarMenuItem };
