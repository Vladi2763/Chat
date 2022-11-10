import classes from "./ChatContent.module.scss";
import { IContent } from "./interface";

const ChatContent: React.FC<IContent> = ({ title, lastMessage }) => {
  const time = new Date(lastMessage.created_at * 1000)
    .toLocaleTimeString()
    .slice(0, 5);
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <span className={classes.container__title}>{title}</span>
        <span className={classes.container__time}>{time}</span>
      </div>
      <div className={classes.content__textMessage}>
        <span>{lastMessage.message}</span>
      </div>
    </div>
  );
};

export default ChatContent;
