import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) =>{
    console.log(props)
    return (
        <Link to={{
            pathname:`${props.match.url}/posts` // Getting Dynamic link using template string
        }}>Here is the link to /profile/posts</Link>
    );
}

export default Profile;