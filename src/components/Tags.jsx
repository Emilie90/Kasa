import React from "react";

const Tags = (props) => {
  return (
    <div className="tagbox">
      <div className="tagbutton">{props.tag}</div>
    </div>
  );
};

export default Tags;
