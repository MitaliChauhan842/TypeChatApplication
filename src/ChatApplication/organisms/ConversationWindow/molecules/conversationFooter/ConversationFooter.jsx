import React, { useCallback, useMemo, memo } from "react";
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _noop from "lodash/noop";

// icon
import { BsArrowRightCircleFill } from "react-icons/bs";

// styles
import styles from "./conversationFooter.module.css";

const ConversationFooter = ({
  messageInput,
  setChatData,
  selectedChatId,
  setMessageInput,
}) => {
  const handleSendMessage = useCallback(() => {
    if (messageInput.trim() && selectedChatId) {
      setChatData((prevChats) =>
        _map(prevChats, (chat) =>
          chat.id === selectedChatId
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat
        )
      );
      setMessageInput("");
    }
  }, [messageInput, selectedChatId, setChatData, setMessageInput]);

  const newMessage = useMemo(
    () => ({
      id: String(Date.now()),
      userId: "1",
      content: messageInput,
      timestamp: new Date().toISOString(),
    }),
    [messageInput]
  );

  return (
    <div className={styles.chatFooter}>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type a message"
      />
      <BsArrowRightCircleFill
        onClick={handleSendMessage}
        className={styles.sendIcon}
      />
    </div>
  );
};

ConversationFooter.propTypes = {
  messageInput: PropTypes.string.isRequired,
  setChatData: PropTypes.func.isRequired,
  selectedChatId: PropTypes.string.isRequired,
  setMessageInput: PropTypes.func.isRequired,
};

ConversationFooter.defaultProps = {
  messageInput: "",
  setChatData: _noop,
  selectedChatId: "",
  setMessageInput: _noop,
};

export default memo(ConversationFooter);
