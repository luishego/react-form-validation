import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormContainer from "./components/FormContainer";
import FormResult from "./components/FormResult";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={FormContainer} />
        <Route exact path="/result/:name" component={FormResult} />
      </div>
    </Router>
  );
};

export default AppRouter;
