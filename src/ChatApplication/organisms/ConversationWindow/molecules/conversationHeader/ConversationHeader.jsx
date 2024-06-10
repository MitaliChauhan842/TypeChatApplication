import React from "react";
import {
  DEFAULT_IMG_AVATAR,
  DEFAULT_USER_MSG,
} from "../../../../constants/chatApp.constants";

import styles from "./conversationHeader.module.css";

const ConversationHeader = ({
  currentUserInfo,
}) => {
  return (
    <div className={styles.chatHeader}>
      <img
        src={currentUserInfo.avatar || DEFAULT_IMG_AVATAR}
        alt="user"
        className={styles.avatar}
      />
      <div className={styles.headerText}>
        {currentUserInfo.name || DEFAULT_USER_MSG}
      </div>
    </div>
  );
};

export default ConversationHeader;
