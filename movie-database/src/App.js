import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Library from "./components/main/Library";
import NewPage from "./NewPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="document-body">
        <Navbar />
        <Switch>
          <Route path="/library" component={Library} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
