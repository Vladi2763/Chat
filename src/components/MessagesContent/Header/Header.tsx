import { InitialState } from "../../../store/mainReducer";
import { useSelector } from "react-redux";

import classes from "./Header.module.scss";

const Header = () => {
  const title = useSelector((state: InitialState) => state.selectedChat?.title);

  return (
    <header className={classes.header}>
      <img
        className={classes.header__img}
        src="./images/message.svg"
        alt="message"
      ></img>
      <span className={classes.header__title}>{title ? title : ""}</span>
    </header>
  );
};

export default Header;
