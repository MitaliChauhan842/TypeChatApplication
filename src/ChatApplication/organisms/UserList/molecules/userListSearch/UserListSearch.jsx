import React, { useCallback } from "react";
import PropTypes from "prop-types";

// icons
import { FaSearch } from "react-icons/fa";

// lodash
import _noop from "lodash/noop";
import _isEmpty from "lodash/isEmpty";
import _filter from "lodash/filter";
import _toLower from "lodash/toLower";
import _includes from "lodash/includes";

// constants
import { EMPTY_ARRAY } from "../../../../constants/chatApp.constants";

// styles
import styles from "./userListSearch.module.css";

const UserListSearch = ({
  searchText,
  setSearchText,
  setFilteredUsers,
  userdata,
  height,
}) => {
  const handleSearch = useCallback(
    (event) => {
      const { value } = event.target;
      setSearchText(value);
      if (_isEmpty(value)) {
        setFilteredUsers(EMPTY_ARRAY);
        return;
      }
      const filtered = _filter(userdata, (user) =>
        _includes(_toLower(user.name), _toLower(value)),
      );
      setFilteredUsers(filtered);
    },
    [setSearchText, setFilteredUsers, userdata],
  );

  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        className={styles.searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

UserListSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setFilteredUsers: PropTypes.func.isRequired,
  userdata: PropTypes.array.isRequired,
};

UserListSearch.defaultProps = {
  searchText: "",
  setSearchText: _noop,
  setFilteredUsers: _noop,
  userdata: EMPTY_ARRAY,
};

export default React.memo(UserListSearch);
