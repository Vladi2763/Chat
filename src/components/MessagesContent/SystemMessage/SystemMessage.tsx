import classes from "./SystemMessage.module.scss";

const SystemMessage: React.FC<{ date: string }> = ({ date }) => {
  return (
    <>
      <div className={classes.systemMessage}>{date}</div>
    </>
  );
};

export default SystemMessage;
