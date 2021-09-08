import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";

const EditIssue = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const issueId = useSelector((state) => state.modalReducer.issueId);
  const issueData = useSelector((state) => state.issueReducer.data);
  const issue = issueData[issueId];

  const [title, setTitle] = useState(issue.title);
  const [description, setDescription] = useState(issue.description);
  const [status, setStatus] = useState(issue.status);

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
        <div>
          <label className="block mb-2" htmlFor="status">
            ステータス
          </label>
          <select
            className="rounded-md"
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="1">Open</option>
            <option value="0">Close</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-x-6">
          <Button className="text-white bg-green-600 hover:bg-green-700">
            更新
          </Button>
          <Button
            onClick={closeModal}
            className="text-gray-500 hover:bg-gray-100"
          >
            閉じる
          </Button>
        </div>
      </div>
    </div>
  );
};

EditIssue.propTypes = {
  issueId: PropTypes.number,
};

export default EditIssue;
