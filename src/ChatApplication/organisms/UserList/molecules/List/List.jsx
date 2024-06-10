import React from "react";

// lodash
import _isEmpty from "lodash/isEmpty";

// constants
import { noResultMessage, userListItem } from "./helpers/list.helpers";

// styles
import styles from "./list.module.css";

const LIST_HEIGHT = 56;

const List = ({
  userdata,
  searchText,
  height,
  filteredUsers,
  setSelectedChatId,
  setCurrentUserInfo,
}) => {
  const handleUserSelect = (user) => {
    setSelectedChatId(user.id);
    setCurrentUserInfo(user);
  };

  const UserList = () => (
    <>
      {userdata.map((user) =>
        userListItem({ user, onClick: handleUserSelect })
      )}
    </>
  );

  const SearchResult = () => (
    <>
      {filteredUsers.map((user) =>
        userListItem({ user, onClick: handleUserSelect })
      )}
    </>
  );

  return (
    <div
      className={
        _isEmpty(filteredUsers) && !_isEmpty(searchText) ? styles.list : ""
      }
      style={{ height: height - LIST_HEIGHT }}
    >
      {_isEmpty(searchText) ? (
        <UserList />
      ) : _isEmpty(filteredUsers) ? (
        noResultMessage()
      ) : (
        <SearchResult />
      )}
    </div>
  );
};

export default List;
