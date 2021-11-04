import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Second = () => {
  return (
    <div className="second-bg">
      <div className="second container">
        <div className="second-left">
          <p className="text-secondary">- Exersice </p>
          <h2>Any Type Of Query & Discussion</h2>
          <p className="my-5">
            lorem10 ipsum life dont change if you will not change so today time
            whistyou.
          </p>
          <a href="#dfvd" target="_blank" className="go text-warning">
            Go SomeWhere <BiRightArrowAlt className="text-warning mx-5"/>
          </a>
        </div>
        <div className="second-right">
          <h2 className="my-4">
            You can't use up creativity, the more you use, more you have in your
            signifant mind.
          </h2>
          <p className="text-secondary">
            You can't use up creativity, the more you use, more you have in your
            signifant mind.
          </p>
          <div className="d-flex">
            <div className="number1">
              <span className="number-14 p-4">14</span>
              <span className="p">Ways of Exercise</span>
            </div>
            <div className="number1 mx-2">
              <span className="number-187 p-2">187</span>
              <span className="p">All medthos good</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
