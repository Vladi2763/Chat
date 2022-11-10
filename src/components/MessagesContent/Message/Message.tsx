import classes from "./Message.module.scss";
import { IMessage } from "./interface";
import Time from "../Time";

const Message: React.FC<IMessage> = ({ my, message, wasRead }) => {
  const whoseMessage = my ? "my" : "partner";
  return (
    <div
      className={classes.container + " " + (my ? classes.container__my : "")}
    >
      <div
        className={`${classes.wrapper} ${classes[`wrapper__${whoseMessage}`]}`}
      >
        <div className={classes.message}>{message.message}</div>
        <Time time={message.created_at} my={whoseMessage} />
        {wasRead && my && (
          <img
            className={classes.img}
            src="/images/iconread.svg"
            alt="iconread"
          />
        )}
      </div>
    </div>
  );
};

export default Message;
