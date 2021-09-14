import React, { useState } from "react";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";

const NewIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const addIssue = (title, description) => {
    dispatch({
      type: "ADD_ISSUE",
      payload: {
        title: title,
        description: description,
      },
    });
    closeModal();
  };

  return (
    <div className="max-w-md mx-auto">
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <Button
            onClick={() => addIssue(title, description)}
            className="text-white bg-green-600 hover:bg-green-700"
          >
            追加
          </Button>
          <Button
            onClick={() => closeModal(title, description)}
            className="text-gray-500 hover:bg-gray-100"
          >
            閉じる
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewIssue;
