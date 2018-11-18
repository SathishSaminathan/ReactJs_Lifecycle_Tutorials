import React from "react";

const Conditional = () => {
  const returnVal = () => {
    // This function will return the value
    return false;
  };

  const showIt = () => {
    return returnVal() ? <div>Its True</div> : <div>Its false</div>;
  };

  return <div>{showIt()}</div>;
};

export default Conditional;
