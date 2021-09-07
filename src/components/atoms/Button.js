import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  const handleClick = props.onClick;
  return (
    <button
      onClick={handleClick}
      className={`inline-flex justify-center items-center px-6 py-2 text-center transition-colors rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
