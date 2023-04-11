import React from "react";

const Host = (props) => {
  return (
    <div className="hostbox">
      <div className="host-name">{props.hostName}</div>
      <div className="host-pic">
        <img src={props.hostPic} alt={props.hostName} />
      </div>
    </div>
  );
};

export default Host;
