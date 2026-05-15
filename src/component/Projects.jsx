import React, { Component } from "react";
import "../css/App.css";
class Interests extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="box sideDecor" data-testid="projects-box">
        <h2 className="sectionHeaderText" id="projects">
          Projects
        </h2>
        <hr />
        <div className="project" data-testid="dnd-project">
          <div className="media-body">
            <h3>Midway Toastmasters</h3>
            <p className="paragraphText">
              A page for midway toastmasters to get meeting information and
              introduce visitors to the club. 12/5/2021
            </p>
            <p>Technologies: React, Redux, React-router, Reactstrap, Netlify</p>
            <h4>Highlights:</h4>
            <ul>
              <li>
                Redesigned{" "}
                <a href=" https://midway-toastmasters.netlify.app/">
                  Vanilla Bootstrap version of midway toastmasters 10/22/2021
                </a>
              </li>
            </ul>
            <a
              className="button"
              href="https://github.com/Codyl/toastmastersReact">
              <i className="fab fa-github"></i>
              View Code
            </a>
            <a
              className="button"
              href="https://mwtoastmasters.netlify.app/home">
              <i className="fas fa-vial"></i>
              Try it out
            </a>
          </div>
          <div className="media-body">
            <img src="./img/mw2.png" alt="" />
          </div>
        </div>

        <hr />
        <div className="project" data-testid="dnd-project">
          <h3>Fanowrimo </h3>
          <div className="media-body">
            <p className="paragraphText">
              Writers can use this to record book details for National Novel
              Writing Month and see family members progress towards their word
              count goal. 12/4/2021
            </p>
            <p>
              Technologies: MongoDB, Angular, NodeJS, Express, Angular Material,
              S3, Elastic Beanstalk
            </p>
            {/* <h4>Highlights:</h4>
            <ul>
              <li>MEAN Stack</li>
            </ul> */}
            <a className="button" href="https://github.com/Codyl/Fanowrimo">
              <i className="fab fa-github"></i>
              View Code
            </a>
            <a
              className="button"
              href="http://fanowrimo.s3-website.us-east-2.amazonaws.com/books">
              <i className="fas fa-vial"></i>
              Try it out
            </a>
          </div>
          <div className="media-body">
            <img src="./img/fanowrimo.png" alt="" />
          </div>
        </div>

        <hr />
        <div className="project" data-testid="dnd-project">
          <h3>Quote Generator</h3>
          <div className="media-body">
            <p className="paragraphText">
              Randomly generates a inspirational quote given a topic. 9/4/2021
            </p>
            <p>Technologies: React, rapidAPI, Styled-components</p>
            {/* <h4>Highlights:</h4>
            <ul>
              <li>Helped in learning clean code practices</li>
              <li>Covered many JS capabilities</li>
            </ul> */}
            <a
              className="button"
              href="https://github.com/Codyl/FCCQuoteGenerator">
              <i className="fab fa-github"></i>
              View Code
            </a>
            <a
              className="button"
              href="https://codyl.github.io/FCCQuoteGenerator/">
              <i className="fas fa-vial"></i>
              Try it out
            </a>
          </div>
          <div className="media-body">
            <img src="./img/quote.png" alt="" />
          </div>
        </div>

        <hr />
        {/* <div className="project" data-testid="dnd-project">
          <h3>Dungeons and dragons Session</h3>
          <div className="media-body">
            <p className="paragraphText">
              A web tool for running a dungeons and dragons session. Allows you
              to see rules generated from dndapi.com, use a form to edit a
              character, and move on a map.
            </p>
            <p>Technologies: html, JS, CSS, webSockets, JSON, API</p>
            <h4>Highlights:</h4>
            <ul>
              <li>Helped in learning clean code practices</li>
              <li>Covered many JS capabilities</li>
            </ul>
            <a className="button" href="https://github.com/Codyl/dndproject">
              <i className="fab fa-github"></i>
              View Code
            </a>
            <a className="button" href="https://codyl.github.io/dndProject">
              <i className="fas fa-vial"></i>
              Try it out
            </a>
          </div>
          <div className="media-body">
            <img src="./img/dnd.png" alt="" />
          </div>
        </div>

        <hr />
        <div className="project" data-testid="cycle-count-project">
          <h3>Cycle count</h3>
          <div className="media-body">
            <p className="paragraphText">
              A website for counting inventory of several items at a time by
              presenting then in a form.
            </p>
            <p>Technologies: PHP, CSS, SQL</p>
            <h4>Highlights:</h4>
            <ul>
              <li>Generates web page from SQL</li>
            </ul>
            <a className="button" href="https://github.com/Codyl/CP_CycleCount">
              <i className="fab fa-github"></i>
              View Code
            </a>
            <a className="button isHidden" href="">
              <i className="fas fa-vial"></i>
              Try it out
            </a>
          </div>
          <div className="media-body">
            <img src="./img/cycleCP.png" alt="" />
          </div>
        </div>
        <hr />
        <div className="project" data-testid="ltl-project">
          <h3>Less Than truckLoad (LTL) Queue</h3>
          <div className="media-body">
            <p className="paragraphText">
              A web tool for keeping track of what items still need pulled to
              put on the truck.
            </p>
            <p>Technologies: html, JS, CSS, NodeJS, SQL, Heroku</p>
            <h4>Highlights:</h4>
            <ul>
              <li>Node</li>
            </ul>
            <a className="button" href="https://github.com/Codyl/CP_OrderQueue">
              <i className="fab fa-github"></i>
              View Code
            </a>
            <a
              className="button"
              href="https://chl-cse341-project2.herokuapp.com/">
              <i className="fas fa-vial"></i>
              Try it out
            </a>
          </div>
          <div className="media-body">
            <img src="./img/ltlQueueCP.png" alt="" />
          </div>
        </div> */}
      </div>
    );
  }
}
export default Interests;
