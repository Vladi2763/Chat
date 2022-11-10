import { useSelector } from "react-redux";

import { InitialState } from "../../store/mainReducer";
import classes from "./ChatItemList.module.scss";

import Chat from "../Chat/Chat";

const ChatItemList = () => {
  const chats = useSelector((state: InitialState) => state.chats);

  return (
    <aside className={classes.sidebar}>
      <span className={classes.sidebar_title}>All chats</span>
      <div className={classes.sidebar__chats}>
        {chats.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </div>
    </aside>
  );
};

export default ChatItemList;
