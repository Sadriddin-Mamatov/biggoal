import React from "react";
import { FiSettings, FiPenTool } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";
import { SiIbm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { FcBbc } from "react-icons/fc";
import { AiFillDropboxCircle } from "react-icons/ai";
import IbmWatson from "../img/ibmwatson.png";
import { BiRightArrowAlt } from "react-icons/bi";
import CardImg from "../img/card.jpg";
const Logos = () => {
  return (
    <div className="logo-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 fe ku">
            <div className="card pos pt-5 p-3 text-light bg-warning ">
              <div className="card-body">
                <div className="card-title  d-flex">
                  <FiSettings className="card-logo"/>
                  <h1>Product Designer</h1>
                </div>
                <div className="card-text">Good result</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 fe ku">
            <div className="card pos pt-5 p-3 text-light bg-secondary">
              <div className="card-body">
                <div className="card-title d-flex">
                  <FiPenTool className="card-logo"/>
                  <h1>Product Designer</h1>
                </div>
                <div className="card-text">Good result</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 fe ku">
            <div className="card pos pt-5 p-3 text-light bg-secondary">
              <div className="card-body">
                <div className="card-title  d-flex">
                  <BsDisplay className="card-logo"/>
                  <h1>Product Designer</h1>
                </div>
                <div className="card-text">Good result</div>
              </div>
            </div>
          </div>
        </div>

        <div className="logos mt-5">
          <div className="row py-5 m-5">
            <div className="col-md-3 col-sm-6">
              {" "}
              <SiIbm  className="logos log1"/>
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={IbmWatson} alt="ibmwatson" style={{ width: "200px" }}  className="logos"/>
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              <div className="logos">Expresso Dambo</div>
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              <FaGooglePay  className="logos log1"/>
            </div>

            <div className="col-md-3 col-sm-6">
              {" "}
              <FcBbc  className="logos log1"/>{" "}
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              <div className="logos">Medium</div>
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              <div className="logo5">
                <AiFillDropboxCircle  className="logos"/>
                yana bir
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              {" "}
              <div>tumblr</div>
            </div>
          </div>
          <div className="dual">
            <div className="logo-left">
              <p className="text-secondary">- Exersice </p>
              <h2 className="w-70">All createive works</h2>
              <h2 className="w-70">Selected projects.</h2>
              <p className="text-secondary w-70 my-5">
                lorem ipsum life dont change if you will not change so today
                time.
              </p>
              <a href="#svs" target="_blank" className="go text-warning my-5">
                Go SomeWhere <BiRightArrowAlt  className="mx-4"/>
              </a>
              <br />
              <img src={CardImg} alt="ijdscmg" className="card-img" />
            </div>
            <div className="logo-right">
              <img src={CardImg} alt="ijdscmg" className="card-img" />
              <br />
              <img src={CardImg} alt="ijdscmg" className="card-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
