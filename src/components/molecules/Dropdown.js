import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Dropdown = () => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={handleClick}>
        {isOpen ? (
          <XIcon className="h-8 w-8  text-white" />
        ) : (
          <MenuIcon className="h-8 w-8  text-white" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 bg-white rounded-lg shadow overflow-hidden">
          <ul className="min-w-max">
            <li>
              <Link className="block py-4 px-6 transition-colors hover:bg-gray-200" exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block py-4 px-6 transition-colors hover:bg-gray-200" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="block py-4 px-6 transition-colors hover:bg-gray-200" to="/issue">
                Issue
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-6 transition-colors hover:bg-gray-200"
                to="/pull-request"
              >
                Pull Request
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
