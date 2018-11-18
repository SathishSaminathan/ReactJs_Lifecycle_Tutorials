import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/post_item";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <hr />
        </header>
        <Switch>
          {/** If we are using the switch we dont need to use exact, 
          The Switch acts same as the javascript switch. 
          If we are putting the "/posts" before the "/posts/:id/:username", 
          the "/posts/:id/:username" won't  work because the switch matches the "/posts" and renders it.
          We need to put the "/posts/:id/:username" at first.
          More specific statement at first and less specific statement at last and then it will work just fine.*/}
          
          {/** It will work fine */}
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />

          {/** It won't work */}
          {/* <Route path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/posts/:id/:username" component={PostItem} />{" "}
          <Route path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
