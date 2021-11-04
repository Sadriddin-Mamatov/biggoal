import React from "react";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn, FaBars } from "react-icons/fa";
import {BiRightArrowAlt} from "react-icons/bi";
import {FcBusinessman} from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="main-section">
      <nav className="navbar navbar-expand-lg pt-3">
        <h1 className="navbar-brand mx-5"><FcBusinessman className="brand-nav mx-5"/></h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-center bg-light text "><FaBars/></span>
      </button>
      <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav le">
          <li className="nav-item mx-3">
            <NavLink to="/" className="nav-link ">
              Services
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink to="/" className="nav-link text-secondary">
              Works
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink to="/" className="nav-link text-secondary">
              Blog
            </NavLink>
          </li>
        </ul>
        </div>
      </nav>

      <div className="main">
        <div className="main-left">
          <h1 className="charlos">Charlos Mendoza.</h1>
          <div className="line"></div>
          <div className="main-icons d-flex">
            <AiFillTwitterCircle className="icons" />
            <BsInstagram className="icons" />
            <FaLinkedinIn className="icons" />
          </div>
        </div>
        <div className="main-right">
          <h4>- Entertaining</h4>
          <h1>Product Designer and Developer, based in California.</h1>
          <p>
            Main designer can do all works in our company so you should convers
            with him and ask all your question Which you will ask.
          </p>
          <a href="#cecew" target="_blank" className="my-info go text-warning ">
            My info  <BiRightArrowAlt className="mx-5"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
