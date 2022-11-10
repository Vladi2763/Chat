import classes from "./NewMessage.module.scss";

const NewMessage: React.FC<{ newMessage: boolean }> = ({ newMessage }) => {
  return (
    <>
      {newMessage && (
        <div id="messages" className={classes.newMessage}>
          Новые сообщения
        </div>
      )}
    </>
  );
};

export default NewMessage;
