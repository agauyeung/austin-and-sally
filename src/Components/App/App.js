import "./App.css";
import Engagement from "../Engagement";
import Header from "../Header";
import Home from "../Home";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Wedding from "../Wedding";

export default function App() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
    history.goForward();
  };

  return (
    <div className="App">
      <Header id="page-header"></Header>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/engagement" component={Engagement} exact />
        <Route path="/wedding" component={Wedding} exact />
      </Switch>
    </div>
  );
}
