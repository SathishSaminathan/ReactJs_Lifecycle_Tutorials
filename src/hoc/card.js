import React from "react";

const Card=(props)=>{
    const styles={
        background: 'grey'
    }
 return <div style={styles}>{props.children}</div>
}

export default Card;