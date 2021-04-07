import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomeScreen from "./screens/home_screen";
import IntroduceScreen from "./screens/introduce_screen";
import SignInScreen from "./screens/signin_screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/app/about" component={IntroduceScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
