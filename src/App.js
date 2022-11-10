import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Learn from "./Learn";
import Shop from "./Shop";
import Home from "./Home";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/learn/:id" component={Learn} />
        <Route path="/shop/:id" component={Shop} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
