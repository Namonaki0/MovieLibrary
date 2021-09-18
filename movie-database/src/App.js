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
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import { firebase_key, app_id } from "./components/apiKey";

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: `${firebase_key}`,
//   authDomain: "moviedatabase-74d8e.firebaseapp.com",
//   databaseURL:
//     "https://moviedatabase-74d8e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "moviedatabase-74d8e",
//   storageBucket: "moviedatabase-74d8e.appspot.com",
//   messagingSenderId: "207653651942",
//   appId: `${app_id}`,
// };

// let database = initializeApp(firebaseConfig);

function App() {
  return (
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
  );
}

export default App;
