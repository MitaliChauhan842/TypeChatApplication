import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

//lodash
import _map from "lodash/map";
import _noop from "lodash/noop";

// icon
import { FaReply, FaTrash } from "react-icons/fa";

// constants
import {
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  DEFAULT_IMG_AVATAR,
} from "../../../../constants/chatApp.constants";

// helpers
import {
  getformatedMessageTime,
  getUserInfo,
  handleDeleteMessage,
} from "./helpers/chatContent.helpers";

// styles
import styles from "./chatContent.module.css";

const ChatContent = ({
  selectedChatDetails,
  userdata,
  setChatData,
  selectedChatId,
}) => {
  const [replyInput, setReplyInput] = useState("");
  const [replyingToMessageId, setReplyingToMessageId] = useState(null);

  const handleReplyMessage = (messageId) => {
    setReplyingToMessageId(messageId);
  };

  const handleDeleteReply = () => {
    setReplyInput("");
    setReplyingToMessageId(null);
  };

  const handleSendReply = (messageId) => {
    if (replyInput.trim() && selectedChatId) {
      const newReply = {
        id: String(Date.now()),
        userId: "1",
        content: replyInput,
        timestamp: new Date().toISOString(),
      };

      const addReplyToMessage = (messages, id, reply) =>
        _map(messages, (message) => {
          if (message.id === id) {
            if (message.replies) {
              return { ...message, replies: [...message.replies, reply] };
            } else {
              return { ...message, replies: [reply] };
            }
          } else if (message.replies) {
            return {
              ...message,
              replies: addReplyToMessage(message.replies, id, reply),
            };
          }
          return message;
        });

      setChatData((prevChats) =>
        _map(prevChats, (chat) =>
          chat.id === selectedChatId
            ? {
                ...chat,
                messages: addReplyToMessage(chat.messages, messageId, newReply),
              }
            : chat
        )
      );
      setReplyInput("");
      setReplyingToMessageId(null);
    }
  };

  const renderMessages = useMemo(() => {
    return (messages, nestedLevel = 0) => {
      return messages.map((message) => {
        const user = getUserInfo(message.userId, userdata);
        const messageTime = getformatedMessageTime(message.timestamp);
        return (
          <div
            key={message.id}
            className={`${styles.message} ${
              message.userId === "1" ? styles.lightgreen : ""
            }`}
            style={{ marginLeft: `${nestedLevel * 20}px` }}
          >
            <div className={styles.messageHeader}>
              <div className={styles.messageUserInfo}>
                <img
                  src={user.avatar || DEFAULT_IMG_AVATAR}
                  alt={user.name}
                  className={styles.avatar}
                />
                <div className={styles.messageUserName}>{user.name}</div>
              </div>
              <div className={styles.messageTime}>{messageTime}</div>
            </div>

            <div className={styles.messageText}>
              <span>{message.content}</span>
              <div className={styles.messageOptions}>
                <div className="message-options-right">
                  <button
                    className="message-option-button"
                    onClick={() =>
                      handleDeleteMessage({
                        messageId: message.id,
                        setChatData,
                        selectedChatId,
                      })
                    }
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="message-option-button"
                    onClick={() => handleReplyMessage(message.id)}
                  >
                    <FaReply />
                  </button>
                </div>
              </div>
            </div>

            {replyingToMessageId === message.id && (
              <div className={styles.replyInput}>
                <input
                  type="text"
                  value={replyInput}
                  onChange={(e) => setReplyInput(e.target.value)}
                  placeholder="Type a reply"
                  className={styles.replyTextInput}
                />
                <div className={styles.replyButtons}>
                  <button
                    onClick={() => handleSendReply(message.id)}
                    className={styles.sendButton}
                  >
                    Send
                  </button>
                  <button
                    onClick={handleDeleteReply}
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {message.replies &&
              renderMessages(message.replies, nestedLevel + 1)}
          </div>
        );
      });
    };
  }, [userdata, setChatData, selectedChatId, replyInput, replyingToMessageId]);
  return (
    <div className={styles.chatContent}>
      {renderMessages(selectedChatDetails?.messages || EMPTY_ARRAY)}
    </div>
  );
};

ChatContent.propTypes = {
  currentUserInfo: PropTypes.object.isRequired,
  selectedChatDetails: PropTypes.object.isRequired,
  userdata: PropTypes.array.isRequired,
  setChatData: PropTypes.func.isRequired,
  selectedChatId: PropTypes.string.isRequired,
};

ChatContent.defaultProps = {
  currentUserInfo: EMPTY_OBJECT,
  selectedChatDetails: EMPTY_OBJECT,
  userdata: EMPTY_ARRAY,
  setChatData: _noop,
  selectedChatId: "",
};

export default ChatContent;
