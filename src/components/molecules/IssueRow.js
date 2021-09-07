import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalContainer from "../organisms/ModalContainer";

const IssueRow = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <tr
        id={props.details.id}
        className="group"
        onClick={() => setIsOpen(true)}
      >
        <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
          <input className="rounded-sm" type="checkbox" />
        </td>
        <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
          {props.details.title}
        </td>
        <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
          {props.details.status ? "Close" : "Open"}
        </td>
        <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200">
          {props.details.createdBy}
        </td>
        <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200"></td>
        <td className="p-3 transition-colors border-b border-gray-200 cursor-pointer group-hover:bg-gray-200"></td>
      </tr>
      <ModalContainer isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

IssueRow.propTypes = {
  details: PropTypes.object,
};

export default IssueRow;
