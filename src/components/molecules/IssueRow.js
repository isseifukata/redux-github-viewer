import React from "react";
import PropTypes from "prop-types";

const IssueRow = (props) => {
  return (
    <tr id={props.details.id}>
      <td className="p-3 border-b border-gray-200">
        <input className="rounded-sm" type="checkbox" />
      </td>
      <td className="p-3 border-b border-gray-200">{props.details.title}</td>
      <td className="p-3 border-b border-gray-200">
        {props.details.status ? "Close" : "Open"}
      </td>
      <td className="p-3 border-b border-gray-200">
        {props.details.createdBy}
      </td>
      <td className="p-3 border-b border-gray-200"></td>
      <td className="p-3 border-b border-gray-200"></td>
    </tr>
  );
};

IssueRow.propTypes = {
  details: PropTypes.object,
};

export default IssueRow;
