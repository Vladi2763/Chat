import React, { useState } from "react";
import classes from "./Input.module.scss";

const Input = () => {
  const [inputText, setInputText] = useState<string | null>("");

  const inputTextHandler = (event: React.ChangeEvent<HTMLDivElement>) => {
    setInputText(event.currentTarget.textContent);
  };
  return (
    <div className={classes.input}>
      <div
        onInput={inputTextHandler}
        className={
          classes.input__textArea +
          " " +
          (inputText ? classes.input__nonePlaceholder : "")
        }
        contentEditable="true"
      ></div>
      <div className={classes.container}>
        <div className={classes.container__clip}>
          <img
            className={classes.container__img}
            src="./images/clip.svg"
            alt="clip"
          />
        </div>
        <div className={classes.container__send}>
          <img
            className={classes.container__img}
            src="./images/send.svg"
            alt="send"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
