import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import DevImg from "../img/software.jpg";
const Informations = () => {
  return (
    <div className="info-bg py-5">
      <div className=" container">
        <div className="info-container mb-5">
          <div className="info-left">
            <h5 className="text-secondary">- Blog</h5>
            <h1>Whats new?</h1>
            <h1>My blog and news.</h1>
          </div>
          <div className="info-right pt-4">
            <div className="info-right-el py-3">
              <span className="text-secondary">Just img</span>
              <h4>Let this be a lesson to you</h4>
              <BiRightArrowAlt  className="text-warning fw"/>
            </div>
            <div className="info-right-el py-3">
              <span className="text-secondary">Just img</span>
              <h4>Let this be a lesson to you </h4>
              <BiRightArrowAlt  className="text-warning fw"/>
            </div>
            <div className="info-right-el py-3">
              <span className="text-secondary">Just img</span>
              <h4>Let this be a lesson to you</h4>
              <BiRightArrowAlt className="text-warning fw"/>
            </div>
          </div>
        </div>

        <div className="info-box pt-4">
          <div className="info-box-l">
            <img src={DevImg} alt="developer" className="dev-img" />
          </div>

          <div className="info-box-r ">
            <h3 className="w-60">
              Amazing At vero eos a summary of the lust odiono dusmussion duo
              gulij bsbdff fsrfregtdty fesresfgt looddhjkuch kuch hoao!
            </h3>
            <h4 className="mt-3">Jeff Bezos</h4>
            <p>Businessmen</p>
            <div className="button-box">
              <div className="pag-line pag-1"></div>
              <div className="pag-line"></div>
              <div className="pag-line"></div>
              <div className="pag-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
