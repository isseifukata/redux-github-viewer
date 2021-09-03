import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../molecules/Dropdown";

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-700 py-4 items-center px-6">
      <div className="flex items-center">
        <Link className="text-white text-4xl font-bold mr-8" to="/">
          GitHub Viewer
        </Link>
        <div className="space-x-4">
          <Link className="text-white" to="/issue">
            Issue
          </Link>
          <Link className="text-white" to="/pull-request">
            Pull Request
          </Link>
        </div>
      </div>
      <Dropdown />
    </header>
  );
};

export default Header;
