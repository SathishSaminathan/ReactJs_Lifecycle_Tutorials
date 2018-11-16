import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";

const App = () => {
  return (
    <BrowserRouter>  {/** it deals with the history */}
      <div>
        <header>This is Header</header>
        <Route path="/" exact component={Home} /> {/** "exact" is used to get the exact path, otherwise this will consider is "/" which is availble in other paths too.. */}
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
