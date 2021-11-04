import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import {FcBusinessman} from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";



const Contact = () => {
    return (
        <div className="con-bg py-5">
            <div className="container py-5 mb-5 dal">
                <div className="con-left mb-5">
                    <h2>Get a Project?</h2>
                    <h2>Let's talk.</h2>
                    <p className="text-secondary my-3 mb-5">Lets do projwct fully never give up shoulg done until the enf of monthPropTypes.any, </p>
                    <a href="#cfds" target="_blank" className="go text-warning mt-5 mb-5">Go Somewhere  <BiRightArrowAlt  className="text-warning fw mx-5"/></a>
                </div>
                <div className="con-right px-5">
                    <h2>Estimate your project?</h2>
                    <h2>Let me know here.</h2>
                    <h5 className="my-4">What's your name?</h5>
                    <h5 className="my-5">Your personal email</h5>
                    <h5>Tel me about your project   <BiRightArrowAlt  className="text-warning fw mx-5"/>    </h5> 

                </div>
            </div>
            <div className="bottom-con text-center mt-5">
                <FcBusinessman className="brand"/>
                <p>something else you want.</p>
                <div className="con-icon py-4">
                    <AiFillTwitterCircle className="icons-con mx-2" />
                    <BsInstagram className="icons-con mx-2" />
                    <FaLinkedinIn className="icons-con mx-2" />
                </div>

            </div>
      
            
        </div>
    );
};

export default Contact;