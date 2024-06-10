import {
  NO_SEARCH_RESULT_IMG,
  NO_SEARCH_RESULT_MESSAGE,
  DEFAULT_IMG_AVATAR,
} from "../../../../../constants/chatApp.constants";

import styles from "../list.module.css";

export const noResultMessage = () => (
  <div className={styles.noResult}>
    <img src={NO_SEARCH_RESULT_IMG} alt={NO_SEARCH_RESULT_MESSAGE} />
    <div>{NO_SEARCH_RESULT_MESSAGE}</div>
  </div>
);

export const userListItem = ({ user, onClick }) => (
  <div key={user.id} className={styles.user} onClick={() => onClick(user)}>
    <img
      src={user.avatar || DEFAULT_IMG_AVATAR}
      alt={user.name}
      className={styles.avatar}
    />
    <div>{user.name}</div>
  </div>
);
