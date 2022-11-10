import classes from "./Chat.module.scss";

import { useDispatch, useSelector } from "react-redux";

import { Chat as ChatType } from "../../store/types";
import { InitialState } from "../../store/mainReducer";
import { MessagesDispatch } from "../../store/actionsCreater";

import { selectChat, getMessageList } from "../../store/actionsCreater";

import Avatar from "../Avatar";
import ChatContent from "../ChatContent";

const Chat: React.FC<{ chat: ChatType }> = ({ chat }) => {
  const selectedChat = useSelector((state: InitialState) => state.selectedChat);
  const selected = selectedChat?.id === chat.id ? "selected" : "";
  const dispatch = useDispatch();
  const messagesDispatch: MessagesDispatch = useDispatch();

  const selectChatHandler = (id: string) => {
    dispatch(selectChat(id));
    messagesDispatch(getMessageList(id));
  };
  return (
    <div
      className={`${classes.chat} ${classes[`chat_${selected}`]}`}
      onClick={() => selectChatHandler(chat.id)}
    >
      <Avatar src={chat.avatar} size="md" />
      <ChatContent title={chat.title} lastMessage={chat.last_message} />
    </div>
  );
};

export default Chat;
