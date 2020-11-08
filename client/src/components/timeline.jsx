import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading animate-box">What I Built</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <a  href='http://www.alchemyga.me' target="_blank">
                      <img src='https://i.imgur.com/xPKbqzw.png' height='490px' className='center img' />
                      </a>
                        <p align='center'>Drop a picture in, get someone else's back. *Returning image may be NSFW depending on the community uploads*</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <a  href='https://allen-shopper.herokuapp.com/' target="_blank">
                      <img src='https://i.imgur.com/FiKjy39.png' height='490px' className='center img' />
                      </a>
                        <p align='center'>A CRUD shopping website using a MERN stack. This project uses Stripe to process credit card payments, and Nodemailer to email receipts from the backend.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <a href='https://radiant-beach-69436.herokuapp.com/' target="_blank">

                      <img src='https://i.imgur.com/bxMQFde.png' height='490px' className='center img' />
                      </a>

                        <p align='center'>A public Github repository I used to practice the use of Redux and user authentication using JWT. Private messaging feature coming soon!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <a href='https://protected-crag-37693.herokuapp.com/' target="_blank">

                      <img src='https://i.imgur.com/LLvlva3.png' height='485px' className='center img' />
                      </a>

                        <p align='center'>A web app that I created for myself to help study coding terms and concepts. A virtual flashcard study tool.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
