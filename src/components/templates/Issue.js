import React from 'react'
import Header from '../organisms/Header';
import TabContainer from "../organisms/TabContainer";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Default = () => {
  return (
    <div>
      <Header />
      <TabContainer classNames="pt-10" />
      <Modal></Modal>
    </div>
  );
}

export default Default
