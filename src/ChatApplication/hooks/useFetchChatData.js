import { useState, useEffect } from "react";

// constants
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants/chatApp.constants";

//Services
import { fetchChatData } from "../services/chatApp.services";

const useFetchChatdata = () => {
  const [chatData, setChatData] = useState(EMPTY_OBJECT);
  useEffect(() => {
    fetchChatData(setChatData);
  }, EMPTY_ARRAY);

  return {
    chatData,
    setChatData,
  };
};

export default useFetchChatdata;
