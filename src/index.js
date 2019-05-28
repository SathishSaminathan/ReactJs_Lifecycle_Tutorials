import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/post_item";
import LifeCycles from "./components/lifecycles";
import Conditional from "./components/conditional";

const App = () => {
  return (
    <LifeCycles/>
    // <BrowserRouter>
    //   <div>
    //     <header>
    //       <Link to="/">Home</Link>
    //       <br />
    //       <Link to="/posts">Posts</Link>
    //       <br />
    //       <Link to="/profile">Profile</Link>
    //       <br />
    //       <Link to="/lifecycles">Life</Link>
    //       <br />
    //       <Link to="/conditional">Conditional</Link>
    //       <hr />
    //     </header>
    //     <Switch>
    //       <Route path="/posts/:id/:username" component={PostItem} />
    //       <Route path="/posts" exact component={Posts} />
    //       <Route path="/profile" component={Profile} />
    //       <Route path="/lifecycles" component={LifeCycles} />
    //       <Route path="/conditional" component={Conditional}/>
    //       <Route path="/" exact component={Home} />
    //       <Route render={() => <h3>OOps 404 Error!!!</h3>} />
    //       {/** This will check the routes if it is not fined any routes it will return the 404 error */}
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
