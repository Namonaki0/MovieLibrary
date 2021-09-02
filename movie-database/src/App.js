import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/main/Home";
import Upcoming from "./components/main/Upcoming";
import Library from "./components/main/Library";
import Favorites from "./components/main/Favorites";
import Settings from "./components/main/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="document-body">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Upcoming" component={Upcoming} />
          <Route path="/library" component={Library} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
