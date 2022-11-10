import { IEditedMessage } from "../../../utils/interface";
import { Message as TypeMessage } from "../../../store/types";
import Avatar from "../../Avatar";
import classes from "./MessagesBlock.module.scss";

import Message from "../Message/Message";

const MessagesBlock: React.FC<{ messagesGroup: Array<IEditedMessage> }> = (
  props
) => {
  const messagesGroup = props.messagesGroup;

  return (
    <div className={classes.messagesBlock__message}>
      {!messagesGroup[0]?.user.you && (
        <Avatar src={messagesGroup[0]?.user.avatar} />
      )}
      <div className={classes.messagesBlock__content}>
        <div className={classes.messagesBlock__content_name}>
          {!messagesGroup[0]?.user.you
            ? messagesGroup[0]?.user?.name +
              " " +
              messagesGroup[0]?.user?.surname
            : ""}
        </div>
        <>
          {messagesGroup.map((message: TypeMessage) => (
            <Message
              key={message.id}
              my={message.user.you}
              message={message}
              wasRead={true}
            ></Message>
          ))}
        </>
      </div>
    </div>
  );
};

export default MessagesBlock;
