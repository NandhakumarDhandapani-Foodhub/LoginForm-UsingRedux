import React from "react";
import LoginForm from "./Components/LoginForm";
import "./App.css";

import { selectUser } from "./SliceComp/userSlice";
import { useSelector } from "react-redux";
import FirstPage from "./Components/FirstPage";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <FirstPage /> : <LoginForm />}</div>;
};

export default App;
