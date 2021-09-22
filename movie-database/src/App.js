import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/main/Home";
import Upcoming from "./components/main/Upcoming";
import Library from "./components/main/Library";
import Comments from "./components/main/Comments";
import Watchlist from "./components/main/Watchlist";
import Settings from "./components/main/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="document-body">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/library" component={Library} />
            <Route path="/comments" component={Comments} />
            <Route path="/watchlist" component={Watchlist} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
