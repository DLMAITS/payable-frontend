import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { StyledSideBarMenuItem } from "./SideBarMenuItem.styled";

const SideBarMenuItem = ({
  currentParentRootOfPath,
  designatedRoute,
  designatedIcon,
  selectedIcon,
  iconIsSelected,
  configureIcon
}) => {
  return (
    <Fragment>
      <li>
        <Link
          to={designatedRoute}
          onClick={e => iconIsSelected({ selectedIcon: designatedIcon })}
        >
          <StyledSideBarMenuItem
            currentParentRootOfPath={currentParentRootOfPath}
            designatedRoute={designatedRoute}
            designatedIcon={designatedIcon}
            selectedIcon={selectedIcon}
            iconIsSelected={iconIsSelected}
            configureIcon={configureIcon}
          />
        </Link>
      </li>
    </Fragment>
  );
};

export default SideBarMenuItem;

/*
<i
            className={
              "fas " +
              configureIcon +
              " fa-lg " +
              (selectedIcon === designatedIcon ||
              currentParentRootOfPath === designatedRoute
                ? "selected"
                : "unselected")
            }
          ></i>
*/
