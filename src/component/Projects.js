import React, { Component } from 'react';
import '../css/App.css';
class Interests extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="box sideDecor" data-testid="projects-box">
                <h2 className="sectionHeaderText" id="projects">Projects</h2>
                <div className="project" data-testid="dnd-project">
                    <h3>Dungeons and dragons Session</h3>
                    <p className="paragraphText">A web tool for running a dungeons and dragons session.
                        Allows you to see rules generated from dndapi.com, use
                        a form to edit a character, and move on a map.
                    </p>
                    <p>Technologies: html, JS, CSS, webSockets, JSON, API</p>
                    <h4>Highlights:</h4>
                    <ul>
                        <li>Helped in learning clean code practices</li>
                        <li>Covered many JS capabilities</li>
                    </ul>
                    <a className="button" href="https://github.com/Codyl/dndproject">
                        <i  className="fab fa-github"></i>
                        View Code
                    </a>
                    <a className="button" href="https://codyl.github.io/dndProject">
                        <i className="fas fa-vial"></i>
                        Try it out
                    </a>
                    <img src="./img/dnd.png" alt=""/>
                </div> 
                
                <hr/>
                <div className="project" data-testid="cycle-count-project">
                    <h3>Cycle count</h3>
                    <p className="paragraphText">
                        A website for counting inventory of several items at a time
                        by presenting then in a form.
                    </p>
                    <p>Technologies: PHP, CSS, SQL</p>
                    <h4>Highlights:</h4>
                    <ul>
                        <li>Generates web page from SQL</li>
                    </ul>
                    <a className="button" href="https://github.com/Codyl/CP_CycleCount">
                        <i  className="fab fa-github"></i>
                        View Code
                    </a>
                    <a className="button isHidden" href="">
                        <i className="fas fa-vial"></i>
                        Try it out
                    </a>
                    <img src="./img/cycleCP.png" alt=""/>
                </div>
                <hr/>
                <div className="project" data-testid="ltl-project">
                    <h3>Less Than truckLoad (LTL) Queue</h3>
                    <p className="paragraphText">
                        A web tool for keeping track of what items 
                        still need pulled to put on the truck.
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
                    <a className="button" href="https://chl-cse341-project2.herokuapp.com/">
                        <i className="fas fa-vial"></i>
                        Try it out
                    </a>
                    <img src="./img/ltlQueueCP.png" alt=""/>
                </div>
            </div>
        );
    }
}
export default Interests;