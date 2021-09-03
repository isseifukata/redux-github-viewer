import React from "react";
import Home from "./pages/Home";
import Issue from "./pages/Issue";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Issue" component={Issue} />
    </div>
  );
}

export default App;
