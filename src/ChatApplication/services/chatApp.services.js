import USER_DATA from "../../data/userData";
import CHAT_DATA from "../../data/chatData";

export const fetchUserdata = (setUserdata, setCurrentUserInfo) => {
  setUserdata(USER_DATA);
};

export const fetchChatData = (setChatData) => {
  setChatData(CHAT_DATA);
};
