import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Link to="/posts/1/sathish">Post 1</Link>
      <br />
      <Link to="/posts/2/keethu">Post 2</Link>
      <br />
      <Link to="/posts/3/SachuKeethu">Post 3</Link>
    </div>
  );
};

export default Posts;
