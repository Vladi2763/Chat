import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ChatDispatch } from "./store/actionsCreater";

import { getChats } from "./store/actionsCreater";

import { PageIndex } from "./pages/index";

import "./App.css";

function App() {
  const dispatch: ChatDispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats());
  }, []);
  return (
    <div className="App">
      <PageIndex />
    </div>
  );
}

export default App;
