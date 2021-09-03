import PropTypes from "prop-types";
import React, { useState } from "react";

const TabContainer = (props) => {
  const [openTab, setOpenTab] = useState(0);

  const tabDefaultStyle = "p-6 text-center text-lg rounded-t-lg";
  const tabActiveStyle = `${tabDefaultStyle} border-t border-l border-r border-gray-300 cursor-default`;
  const tabInactiveStyle = `${tabDefaultStyle} border-b border-gray-300 transition-colors hover:bg-gray-100`;

  const tabPanelDefaultStyle = "p-6";
  const tabPanelActiveStyle = `${tabPanelDefaultStyle}`;
  const tabPanelInactiveStyle = `${tabPanelDefaultStyle} hidden`;

  return (
    <div className={props.classNames}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="tabs grid grid-cols-2">
          <button
            onClick={() => setOpenTab(0)}
            className={openTab === 0 ? tabActiveStyle : tabInactiveStyle}
          >
            Issue
          </button>
          <button
            onClick={() => setOpenTab(1)}
            className={openTab === 1 ? tabActiveStyle : tabInactiveStyle}
          >
            Pull Request
          </button>
        </div>
        <div className="tab-panels">
          <div
            className={
              openTab === 0 ? tabPanelActiveStyle : tabPanelInactiveStyle
            }
          >
            タブコンテンツ1
          </div>
          <div
            className={
              openTab === 1 ? tabPanelActiveStyle : tabPanelInactiveStyle
            }
          >
            タブコンテンツ2
          </div>
        </div>
      </div>
    </div>
  );
};

TabContainer.propTypes = {
  classNames: PropTypes.string,
};

TabContainer.defaultProps = {
  classNames: "",
};

export default TabContainer;
