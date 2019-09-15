import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./SideBarMenuItem.css";

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
        </Link>
      </li>
    </Fragment>
  );
};

export default SideBarMenuItem;
