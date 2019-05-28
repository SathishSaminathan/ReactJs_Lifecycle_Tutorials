import React from "react";
import { Link, Redirect } from "react-router-dom";

import Card from "../hoc/card";
import Auth from "../hoc/auth";

const Profile = props => {
  console.log(props);
  return (
    <Auth>
      <Card>
        <Link
          to={{
            pathname: `${props.match.url}/posts` // Getting Dynamic link using template string
          }}
        >
          Here is the link to {`${props.match.url}/posts`}
        </Link>
      </Card>
    </Auth>
  );
};

export default Profile;
