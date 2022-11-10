import classes from "./Time.module.scss";

const Time: React.FC<{ time: number; my: string }> = ({ time, my }) => {
  const newTime = new Date(time).toLocaleTimeString().slice(0, 5);
  return (
    <div className={`${classes.time} ${classes[`time__${my}`]}`}>{newTime}</div>
  );
};

export default Time;
