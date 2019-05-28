import React from 'react'
import { Redirect } from "react-router-dom";

const Auth =(props)=>{
    // var pass ="pass123"
    // if(pass === "pass1233"){
    //     return props.children
    // }
    // else{
    //     console.log(props.history)
    //     props.history.pusu("/post")
    //     return <h3>You are not authorized!!!!</h3>
    //     // return <div>{props.history.push("/")}</div>
    //     // return <Redirect to="/" />
    // }
    
    props.history.push("/post")
}

export default Auth;