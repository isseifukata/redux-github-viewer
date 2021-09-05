import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import DropdownItem from "../atoms/DropdownItem";

const Dropdown = () => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={handleClick}>
        {isOpen ? (
          <XIcon className="w-8 h-8 text-white" />
        ) : (
          <MenuIcon className="w-8 h-8 text-white" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 overflow-hidden bg-white rounded-lg shadow">
          <ul className="min-w-max">
            <DropdownItem exact="true" to="/" title="Home" />
            <DropdownItem to="/profile" title="Profile" />
            <DropdownItem to="/issue" title="Issue" />
            <DropdownItem to="/pull-request" title="Pull Request" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
