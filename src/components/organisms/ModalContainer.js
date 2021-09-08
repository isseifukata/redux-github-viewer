import React from "react";
import { XIcon } from "@heroicons/react/solid";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    inset: "100px",
  },
};

const ModalContainer = ({ isOpen, component }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        <div className="text-right">
          <button onClick={closeModal}>
            <XIcon className="w-8 h-8 text-gray-500" />
          </button>
        </div>
        {component}
      </Modal>
    </>
  );
};

ModalContainer.propTypes = {
  isOpen: PropTypes.bool,
  component: PropTypes.element,
};

export default ModalContainer;
