import classes from "./Page.module.scss";

import ChatItemList from "../../components/ChatItemList";
import Content from "../../components/MessagesContent/Content";
import { useEffect, useState } from "react";

export const PageIndex = () => {
  const [width, setWidth] = useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width < 700) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width && (
        <div className={classes.alarm}>
          <span>
            ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ <br />
            ТЕЛЕФОНОВ <br />У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
          </span>
        </div>
      )}
      {!width && (
        <div className={classes.page}>
          <ChatItemList />
          <Content />
        </div>
      )}
    </>
  );
};
