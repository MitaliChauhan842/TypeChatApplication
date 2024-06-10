import React, { useState, useEffect } from "react";
import _head from "lodash/head";
import _filter from "lodash/filter";

import { EMPTY_OBJECT } from "../../constants/chatApp.constants";

import ConversationHeader from "./molecules/conversationHeader";
import MessagePanel from "./organisms/MessagePanel";

import styles from "./conversationWindow.module.css";

const ConversationWindow = ({
  selectedChatId,
  chatData,
  height,
  setChatData,
  currentUserInfo,
  userdata,
  selectedChatDetails,
  setSelectedChatDetails,
}) => {
  useEffect(() => {
    const filteredData = _head(
      _filter(chatData, (chat) => chat.id === selectedChatId)
    );
    setSelectedChatDetails(filteredData);
  }, [selectedChatId, chatData]);
  return (
    <div className={styles.conversationWindowContainer}>
      <ConversationHeader currentUserInfo={currentUserInfo} />
      <MessagePanel
        selectedChatId={selectedChatId}
        height={height}
        currentUserInfo={currentUserInfo}
        selectedChatDetails={selectedChatDetails}
        userdata={userdata}
        setChatData={setChatData}
        chatData={chatData}
      />
    </div>
  );
};

export default ConversationWindow;
