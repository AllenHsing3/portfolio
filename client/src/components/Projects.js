import React from "react";
import { HomeButton } from "./HomeButton";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <HomeButton />
      <div className="container-contact">
        <div style={{marginTop:"25vh"}}>
          <a className="white " href="http://www.cyclops.watch" target="_blank">
            <p className="x-large animate-hover">Cyclops</p>
          </a>
          <p className="red small">
            An online watch box for wristwatch enthusiasts.
          </p>
        </div>
        <div className="project-margin">
          <a className="white " href='http://www.alchemyga.me' target="_blank">
            <p className="x-large animate-hover">Alchemy</p>
          </a>
          <p className="red small">Drop a picture in, get someone else's back. *Returning image may be not apropriate depending on the community uploads*</p>
        </div>
        <div className="project-margin">
          <a className="white " href='https://allen-shopper.herokuapp.com/' target="_blank">
            <p className="x-large animate-hover">Shopper</p>
          </a>
          <p className="red small">A CRUD shopping website using a MERN stack. This project uses Stripe to process credit card payments, and Nodemailer to email receipts from the backend.</p>
        </div>
        <div className="project-margin">
          <a className="white " href='https://protected-crag-37693.herokuapp.com/' target="_blank">
            <p className="x-large animate-hover">StudyBuddy</p>
          </a>
          <p style={{marginBottom:"10vh"}} className="red small">A web app that I created for myself to help study coding terms and concepts. A virtual flashcard study tool.</p>
        </div>
      </div>
    </div>
  );
}
