import React from "react";

import {
  NoConversationImageUrl,
  NoConversationMessage,
} from "../../constants/conversationWindow.constants";

const NoChatSelectedPanel = () => (
  <div>
    <img src={NoConversationImageUrl} alt="Select Conversation" />
    <div>{NoConversationMessage}</div>
  </div>
);

export default NoChatSelectedPanel;
