import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Issue from "./pages/Issue";
import PullRequest from "./pages/PullRequest";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/issue" component={Issue} />
      <Route path="/pull-request" component={PullRequest} />
    </div>
  );
}

export default App;
