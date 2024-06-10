import _map from "lodash/map";

export const handleDeleteMessage = ({
  messageId,
  setChatData,
  selectedChatId,
}) => {
  const deleteMessage = (messages, id) =>
    messages.filter((message) => {
      if (message.id === id) return false;
      if (message.replies) {
        message.replies = deleteMessage(message.replies, id);
      }
      return true;
    });

  setChatData((prevChats) =>
    _map(prevChats, (chat) =>
      chat.id === selectedChatId
        ? { ...chat, messages: deleteMessage(chat.messages, messageId) }
        : chat
    )
  );
};

export const getUserInfo = (userId, userdata) => {
  return userdata.find((user) => user.id === userId);
};

export const getformatedMessageTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
