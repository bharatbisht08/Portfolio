import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import HomePage from "../Pages/HomePage/HomePage";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/contact" component={Contact} />
        {/* 
        <Route path="/" component={HomePage} />

        <Route path="/" component={HomePage} />

        <Route path="/" component={HomePage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
