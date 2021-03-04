import React, { useState } from "react";
import { HomeButton } from "./HomeButton";
import { Link } from "react-router-dom";

export default function Contact() {
    const [toggleEmail, setToggleEmail] = useState('allen.hsing@gmail.com')
  const copyEmail = () => {
    var input = document.createElement('textarea');
    input.innerHTML = 'allen.hsing@gmail.com';
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
  };
  return (
    <div>
      <HomeButton />
      <div className="container-contact">
        <div>
          <h1 className="title large white">Let's create something awesome!</h1>
        </div>
        <div>
          <h2
            className="sub-title medium white"
            style={{ marginTop: "10vh", marginBottom: "2vh" }}
          >
            Contact
          </h2>
          <p className="small white">
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, to create something of value. I want to
            bring my collective web design experience to the table where we can
            work together to solve real business-problems in a way that
            optimizes all of our respective experience and knowledge.
          </p>
          <p
            className="small white"
            style={{ marginTop: "2vh", marginBottom: "2vh" }}
          >
            Feel free to reach out thorugh any platform below:
          </p>

          <p
            className="red small animate-hover-link link"
            onClick={() => copyEmail()}
            onMouseEnter={()=> setToggleEmail("Click to copy to email")}
            onMouseLeave={()=> setToggleEmail("allen.hsing@gmail.com")}

          >
            {toggleEmail}
          </p>

          <a
            className="red small"
            href="https://www.linkedin.com/in/allen-hsing"
          >
            <p className="animate-hover-link link">Linkedin</p>
          </a>

          <a className="red small" href="https://twitter.com/AllenHsing">
            <p className="animate-hover-link link">Twitter</p>
          </a>

          <a className="red small" href="https://www.facebook.com/hsing3">
            <p className="animate-hover-link link">Facebook</p>
          </a>
        </div>
      </div>
    </div>
  );
}

