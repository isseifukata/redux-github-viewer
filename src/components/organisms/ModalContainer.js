import React from "react";
import { XIcon } from "@heroicons/react/solid";
import Modal from "react-modal";
import PropTypes from "prop-types";
import Button from "../atoms/Button";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    inset: "100px",
  },
};

const ModalContainer = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} style={customStyles}>
        <div className="text-right">
          <button onClick={props.closeModal}>
            <XIcon className="w-8 h-8 text-gray-500" />
          </button>
        </div>
        <div className="max-w-md mx-auto ">
          <h2 className="mb-8 text-3xl">Issueを追加</h2>
          <div className="space-y-8">
            <div>
              <label className="block mb-2" htmlFor="title">
                タイトル
              </label>
              <input
                type="text"
                name="title"
                className="w-full rounded-md"
                id="title"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="description">
                説明
              </label>
              <textarea
                name="description"
                className="w-full rounded-md"
                id="description"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="status">
                ステータス
              </label>
              <select className="rounded-md" name="status" id="status">
                <option value="1">Open</option>
                <option value="0">Close</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-x-6">
              <Button className="text-white bg-green-600 hover:bg-green-700">
                更新
              </Button>
              <Button
                onClick={props.closeModal}
                className="text-gray-500 hover:bg-gray-100"
              >
                閉じる
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

ModalContainer.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default ModalContainer;
