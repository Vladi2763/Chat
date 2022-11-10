import { Chat, Message } from "./types";

import { groupBySender } from "../utils/groupBySender";
import { groupByDate } from "../utils/groupByDate";
import { IEditedMessage } from "../utils/interface";

export type InitialState = {
  chats: Array<Chat>;
  selectedChat: Chat | null;
  messagesInSelectedChat: Record<string, Array<Array<IEditedMessage>>> | null;
};

type Action = {
  type: string;
  chats: Array<Chat>;
  id: string;
  messages: Array<Message>;
};

const initialState: InitialState = {
  chats: [],
  selectedChat: null,
  messagesInSelectedChat: null,
};

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SELECT_CHAT": {
      const index = state.chats.findIndex((chat) => chat.id === action.id);

      return {
        ...state,
        selectedChat: { ...state.chats[index] },
      };
    }
    case "SET_CHATS": {
      const chats = action.chats;
      return {
        ...state,
        chats: [...chats],
      };
    }

    case "SET_MESSAGES": {
      const messages = action.messages;

      const sortedMessageByDate = messages.sort(
        (prev, next) => prev.created_at - next.created_at
      );

      const editedMessages = sortedMessageByDate.map((message) => ({
        ...message,
        created_date: new Date(message.created_at * 1000).toLocaleDateString(),
        created_time: new Date(message.created_at * 1000).toLocaleTimeString(),
      }));

      const groupBy = groupByDate("created_date");
      const newMessages = groupBy(editedMessages);
      const groupedMessages: Record<string, Array<Array<IEditedMessage>>> = {};

      Object.keys(newMessages).forEach((dateKey) => {
        groupedMessages[dateKey] = groupBySender(newMessages[dateKey]);
      });
      return {
        ...state,
        messagesInSelectedChat: { ...groupedMessages },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
