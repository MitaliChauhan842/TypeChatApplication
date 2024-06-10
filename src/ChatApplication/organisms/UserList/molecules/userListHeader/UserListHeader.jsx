import React, { memo } from "react";

// styles
import styles from "./userListHeader.module.css";

const UserListHeader = () => {
  return <div className={styles.UserListHeader}>Chats</div>;
};

export default memo(UserListHeader);
