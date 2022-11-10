import classes from "./Content.module.scss";

import Header from "../Header";
import Messages from "../Messages";
import Input from "../Input";

const Content = () => {
  return (
    <div className={classes.content}>
      <Header />
      <Messages />
      <Input />
    </div>
  );
};

export default Content;
