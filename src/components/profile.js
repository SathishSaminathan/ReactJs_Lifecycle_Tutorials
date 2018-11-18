import React from "react";
import { Link, Redirect } from "react-router-dom";

const Profile = props => {
  const redir = () => {
    return (
      <Redirect to="/posts" /> 
      /**"<Redirect to="/posts" />" will Redirecting to the posts page 
       * or we can use props.history.push("/posts") so we can less the components
      */
    );
  };
  console.log(props);
  return (
    <div>
      <Link
        to={{
          pathname: `${props.match.url}/posts` // Getting Dynamic link using template string
        }}
      >
        Here is the link to /profile/posts
      </Link>
      {redir()}
    </div>
  );
};

export default Profile;
