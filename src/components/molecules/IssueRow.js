import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const IssueRow = ({ details }) => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: "OPEN_MODAL_EXISTING_ISSUE",
      payload: { issueId: details.id },
    });
  };

  return (
    <tr id={details.id} className="group" onClick={openModal}>
      <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
        <input className="rounded-sm" type="checkbox" />
      </td>
      <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
        {details.title}
      </td>
      <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
        {details.status ? "Open" : "Close"}
      </td>
      <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
        {details.createdBy}
      </td>
      <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200"></td>
      <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200"></td>
    </tr>
  );
};

IssueRow.propTypes = {
  details: PropTypes.object,
};

export default IssueRow;
