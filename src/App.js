import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import BillScreen from "./screens/bill_screen";
import Covid19Screen from "./screens/covid19_screen";
import HomeScreen from "./screens/home_screen";
import IntroduceScreen from "./screens/introduce_screen";
import SignInScreen from "./screens/signin_screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/app/bill" component={BillScreen} />
        <Route path="/app/covid19" component={Covid19Screen} />
        {/* <Route path="/app/housing" component={} />
        <Route path="/app/mp" component={} />
        <Route path="/app/insights" component={} /> */}
        <Route path="/app/about" component={IntroduceScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
