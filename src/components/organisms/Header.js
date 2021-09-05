import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../molecules/Dropdown";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-700">
      <div className="flex items-center">
        <Link className="mr-8 text-4xl font-bold text-white" to="/">
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
