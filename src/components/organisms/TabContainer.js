import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import IssueRow from "../molecules/IssueRow";

const TabContainer = (props) => {
  const data = useSelector((state) => state.data);

  const [openTab, setOpenTab] = useState(0);

  const tabDefaultStyle = "p-6 text-center text-lg rounded-t-lg";
  const tabActiveStyle = `${tabDefaultStyle} border-t border-l border-r border-gray-300 cursor-default`;
  const tabInactiveStyle = `${tabDefaultStyle} border-b border-gray-300 transition-colors hover:bg-gray-100`;

  const tabPanelDefaultStyle = "p-6";
  const tabPanelActiveStyle = `${tabPanelDefaultStyle}`;
  const tabPanelInactiveStyle = `${tabPanelDefaultStyle} hidden`;

  return (
    <div className={props.classNames}>
      <div className="max-w-4xl px-6 mx-auto">
        <div className="grid grid-cols-2 tabs">
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
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-bold">Issue</p>
              <input
                type="text"
                className="w-full rounded-md"
                placeholder="Issue名で検索"
              />
              <button className="inline-flex items-center px-6 py-2 text-center text-white transition-colors bg-green-600 rounded-md hover:bg-green-700">
                New
              </button>
              <button className="inline-flex items-center px-6 py-2 text-center text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                Delete
              </button>
            </div>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="p-3 text-left border-b border-gray-300">
                    <input className="rounded-sm" type="checkbox" />
                  </th>
                  <th className="p-3 text-left border-b border-gray-300"></th>
                  <th className="p-3 text-left border-b border-gray-300">
                    ステータス
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    作成者
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    作成日付
                  </th>
                  <th className="p-3 text-left border-b border-gray-300">
                    更新日付
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => {
                  return <IssueRow key={key} details={data[key]} />;
                })}
              </tbody>
            </table>
          </div>
          <div
            className={
              openTab === 1 ? tabPanelActiveStyle : tabPanelInactiveStyle
            }
          >
            <p className="text-3xl text-center">Pull Request</p>
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
