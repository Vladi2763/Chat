import wrapper from "../utils/wrapper";
import { URLS } from "../constants/urls";
import { Chat, Message } from "./types";
import { InitialState } from "./mainReducer";

import { ThunkDispatch } from "redux-thunk";
import { ActionCreator, Action } from "redux";

export type ChatDispatch = ThunkDispatch<
  InitialState,
  void,
  Action<{ type: string; chats: Array<Chat> }>
>;

export type MessagesDispatch = ThunkDispatch<
  InitialState,
  void,
  Action<{ type: string; messages: Array<Message> }>
>;

export const selectChat: ActionCreator<Action> = (id: string) => {
  return {
    type: "SELECT_CHAT",
    id,
  };
};

const setChats: ActionCreator<Action> = (chats: Array<Chat>) => {
  return {
    type: "SET_CHATS",
    chats,
  };
};

const setMessages: ActionCreator<Action> = (messages: Array<Message>) => {
  return {
    type: "SET_MESSAGES",
    messages,
  };
};

export const getChats = () => {
  return (dispatch: ChatDispatch) => {
    wrapper("get", `https://api.clout.one/test/${URLS.LIST}`).then((data) => {
      dispatch(setChats(data.response));
    });
  };
};

export const getMessageList = (id: string) => {
  return (dispatch: MessagesDispatch) => {
    wrapper(
      "get",
      `https://api.clout.one/test/${URLS.MESSAGES}?chat_id=${id}`
    ).then((data) => {
      dispatch(setMessages(data.response));
    });
  };
};
