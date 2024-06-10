import React, { useState } from "react";
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// hooks
import useWindowDimensions from "./hooks/useWindowDimensions";
import useFetchUserdata from "./hooks/useFetchUserData";
import useFetchChatdata from "./hooks/useFetchChatData";

// Components
import UserList from "./organisms/UserList";
import ConversationWindow from "./organisms/ConversationWindow";

// styles
import styles from "./chatApplication.module.css";

// constants
import { EMPTY_OBJECT } from "./constants/chatApp.constants";

const ChatApplication = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChatDetails, setSelectedChatDetails] = useState(EMPTY_OBJECT);

  const { width, height } = useWindowDimensions();
  const { userdata, currentUserInfo, setUserdata, setCurrentUserInfo } =
    useFetchUserdata();
  const { chatData, setChatData } = useFetchChatdata();

  return (
    <div className={styles.chatContainer} style={{ height }}>
      <UserList
        userdata={userdata}
        height={height}
        currentUserInfo={currentUserInfo}
        chatData={chatData}
        setSelectedChatId={setSelectedChatId}
        setCurrentUserInfo={setCurrentUserInfo}
      />
      <ConversationWindow
        selectedChatId={selectedChatId}
        chatData={chatData}
        setChatData={setChatData}
        currentUserInfo={currentUserInfo}
        height={height}
        userdata={userdata}
        selectedChatDetails={selectedChatDetails}
        setSelectedChatDetails={setSelectedChatDetails}
      />
    </div>
  );
};

ChatApplication.propTypes = {
  userdata: PropTypes.object,
  selectedUserId: PropTypes.string,
  currentUserInfo: PropTypes.object,
  height: PropTypes.number,
  setUserMetadata: PropTypes.func,
};

ChatApplication.defaultProps = {
  userdata: EMPTY_OBJECT,
  currentUserInfo: EMPTY_OBJECT,
  selectedUserId: undefined,
  height: 0,
  setUserMetadata: _noop,
};

export default ChatApplication;
