import React, { useState } from "react";
import { HomeButton } from "./HomeButton";

export default function About() {
  return (
    <div>
      <HomeButton />
      <div className="container-contact">
        <div>
          <h1 className="title large white">I develop digital products</h1>
        </div>
        <div>
          <h2
            className="sub-title medium white"
            style={{ marginTop: "10vh", marginBottom: "2vh" }}
          >
            About
          </h2>
          <p className="small white" style={{ marginBottom: "2vh" }}>
            Hello, I'm Allen. I am a full stack developer with a passion for
            creating websites that bring positive impact to the people who use
            them. So much so that I left my previous comfy career to pursue web
            development.
          </p>
          <p className="small white" style={{ marginBottom: "2vh" }}>
            I am always improving my skills and challenging the upper limit to
            what I can accomplish. I pride myself in my ability to absorb new
            concepts and information at lightning speeds. My previous
            accomplishments include: being a studio guitarist for top chart
            artists, achieving 10th percentile financial analyst for a major
            bank, becoming the global top sales representative in the world's
            largest luxury goods company.
          </p>
          <p className="small white" >
            My next goal is to become an awesome web dev.
          </p>
          <p
            className="small white"
            style={{ marginTop: "2vh", marginBottom: "2vh" }}
          >
            You can get a closer look at my ever growing tech stack below!
          </p>
          <a className="red small" href="https://drive.google.com/file/d/1vCWoiTQ38DjfhjlklcmeD4nvpyX10WZx/view?usp=sharing">
            <p className="animate-hover-link link">My resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
