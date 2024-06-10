import React, { useState, useMemo, memo } from "react";
import PropTypes from "prop-types";

// constants
import { HEADER_HEIGHT } from "../../constants/conversationWindow.constants";

// components
import ChatContent from "../../molecules/chatContent/ChatContent";
import ConversationFooter from "../../molecules/conversationFooter/ConversationFooter";
import NoChatSelectedPanel from "../../molecules/noChatSelectedPanel";

// styles
import styles from "./messagePanel.module.css";

const MessagePanel = ({
  selectedChatId,
  height,
  setChatData,
  currentUserInfo,
  selectedChatDetails,
  userdata,
  chatData,
}) => {
  console.log("chatDta", chatData);
  const [messageInput, setMessageInput] = useState("");
  const conversationPageContainerStyles = useMemo(() => ({ height }), [height]);
  return (
    <div>
      {selectedChatId ? (
        <div
          className={styles.conversationPageContainer}
          style={conversationPageContainerStyles}
        >
          <ChatContent
            userdata={userdata}
            selectedChatId={selectedChatId}
            currentUserInfo={currentUserInfo}
            setChatData={setChatData}
            selectedChatDetails={selectedChatDetails}
            chatData={chatData}
          />
          <ConversationFooter
            messageInput={messageInput}
            setChatData={setChatData}
            selectedChatId={selectedChatId}
            setMessageInput={setMessageInput}
          />
        </div>
      ) : (
        <div
          style={{ height: height - HEADER_HEIGHT }}
          className={styles.emptyConversation}
        >
          <NoChatSelectedPanel />
        </div>
      )}
    </div>
  );
};

MessagePanel.propTypes = {
  selectedChatId: PropTypes.string,
  height: PropTypes.number.isRequired,
  setChatData: PropTypes.func.isRequired,
  currentUserInfo: PropTypes.object.isRequired,
  selectedChatDetails: PropTypes.object.isRequired,
  userdata: PropTypes.array.isRequired,
  chatData: PropTypes.array.isRequired,
};

MessagePanel.defaultProps = {
  selectedChatId: null,
};

export default memo(MessagePanel);
