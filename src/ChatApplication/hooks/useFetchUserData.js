import { useState, useEffect } from "react";

// constants
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants/chatApp.constants";

//Services
import { fetchUserdata } from "../services/chatApp.services";

const useFetchUserdata = () => {
  const [userdata, setUserdata] = useState(EMPTY_ARRAY);
  const [currentUserInfo, setCurrentUserInfo] = useState(EMPTY_OBJECT);

  useEffect(() => {
    fetchUserdata(setUserdata);
  }, EMPTY_ARRAY);

  return {
    userdata,
    currentUserInfo,
    setUserdata,
    setCurrentUserInfo,
  };
};

export default useFetchUserdata;
