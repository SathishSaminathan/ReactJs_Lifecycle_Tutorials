import React from 'react'

const Auth =(props)=>{
    var pass ="pass123"
    if(pass === "pass1234"){
        return props.children
    }
    else{
        return <h3>You are not authorized!!!!</h3>
    }
}

export default Auth;