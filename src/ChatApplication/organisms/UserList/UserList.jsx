import React, { useState } from "react";
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// constants
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../../constants/chatApp.constants";

// components
import List from "./molecules/List";
import UserListHeader from "./molecules/userListHeader";
import UserListSearch from "./molecules/userListSearch";

// styles
import styles from "./userList.module.css";

const UserList = ({
  userdata,
  currentUserInfo,
  height,
  chatData,
  setSelectedChatId,
  setCurrentUserInfo,
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(EMPTY_ARRAY);

  return (
    <div className={styles.userListContainer}>
      <UserListHeader />
      <UserListSearch
        searchText={searchText}
        setSearchText={setSearchText}
        setFilteredUsers={setFilteredUsers}
        userdata={userdata}
        height={height}
      />
      <List
        height={height}
        userdata={userdata}
        searchText={searchText}
        filteredUsers={filteredUsers}
        chatData={chatData}
        setSelectedChatId={setSelectedChatId}
        setCurrentUserInfo={setCurrentUserInfo}
      />
    </div>
  );
};

UserList.propTypes = {
  userdata: PropTypes.array.isRequired,
  currentUserInfo: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  chatData: PropTypes.array.isRequired,
  setSelectedChatId: PropTypes.func.isRequired,
  setCurrentUserInfo: PropTypes.func.isRequired,
};

UserList.defaultProps = {
  userdata: EMPTY_ARRAY,
  currentUserInfo: EMPTY_OBJECT,
  height: 0,
  chatData: EMPTY_ARRAY,
  setSelectedChatId: _noop,
  setCurrentUserInfo: _noop,
};

export default UserList;
