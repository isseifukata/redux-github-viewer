import React from 'react'
import Header from '../organisms/Header';
import TabContainer from "../organisms/TabContainer";
import ModalContainer from "../organisms/ModalContainer";
import { useSelector } from "react-redux";
import NewIssue from '../organisms/NewIssue';
import EditIssue from '../organisms/EditIssue';

const Issue = () => {
  const isModalOpen = useSelector((state) => state.modalReducer.isModalOpen);
  const issueId = useSelector((state) => state.modalReducer.issueId);
  const newIssue = useSelector((state) => state.modalReducer.newIssue);

  const component = newIssue ? <NewIssue /> : <EditIssue />;
  return (
    <div>
      <Header />
      <TabContainer classNames="pt-10" />
      <ModalContainer
        isOpen={isModalOpen}
        component={component}
        issueId={issueId}
      />
    </div>
  );
}

export default Issue
