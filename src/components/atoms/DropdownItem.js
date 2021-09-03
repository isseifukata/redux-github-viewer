import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";

const DropdownItem = (props) => {
  return (
    <li>
      <Link
        className="block py-4 px-6 transition-colors hover:bg-gray-200"
        exact={props.exact}
        to={props.to}
      >
        {props.title}
      </Link>
    </li>
  );
};

DropdownItem.propTypes = {
  exact: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
};

DropdownItem.defaultProps = {
  exact: false,
};

export default DropdownItem;
