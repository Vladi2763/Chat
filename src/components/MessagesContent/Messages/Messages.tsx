import { InitialState } from "../../../store/mainReducer";
import classes from "./Messages.module.scss";
import { useSelector } from "react-redux";

import SystemMessage from "../SystemMessage";
import NewMessage from "../NewMessage";
import MessagesBlock from "../MessagesBlock";

import { IEditedMessage } from "../../../utils/interface";
import React from "react";

const Messages = () => {
  const isNew = { new: false };
  const messages: any = useSelector(
    (state: InitialState) => state.messagesInSelectedChat
  );

  const getNewMessage = () => {
    isNew.new = true;
    return <NewMessage newMessage={isNew.new} />;
  };

  return (
    <div className={classes.messages}>
      {Object.keys(messages || {}).map((date: string, index: number) => {
        return (
          <div key={index} className={classes.messages__dateBlock}>
            <SystemMessage date={date} />
            {messages[date].map(
              (messagesGroup: Array<IEditedMessage>, index: number) => (
                <React.Fragment key={index}>
                  {!isNew.new && messagesGroup[0].is_new && getNewMessage()}
                  <MessagesBlock messagesGroup={messagesGroup} />
                </React.Fragment>
              )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
