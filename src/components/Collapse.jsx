import { useState } from "react";
import Fleche from "../images/Vector.png";

const Collapse = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div className="About__box">
      <div onClick={toggle} className="About__title">
        <h2>{props.Title} </h2>
        <img
          src={Fleche}
          className={open ? "fleche-open" : "fleche"}
          alt="fleche"
        />
      </div>
      <div className="About__content">
        <div
          className={open ? "About__content__show" : "About__content__hidden"}
        >
          <div
            className="About__content__p"
            aria-hidden={open ? "true" : "false"}
          >
            {props.Text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
