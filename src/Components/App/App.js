import "./App.css";
import Header from "../Header";
import Home from "../Home";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
    history.goForward();
  };

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route
          path="/applications"
          render={(props) => (
            <AddMoreContainer
              id="applicationsAddMore"
              childComponent={ChartGenerator}
            ></AddMoreContainer>
          )}
        /> */}
      </Switch>
    </div>
  );
}
